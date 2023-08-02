// import * as dotenv from 'dotenv';
// dotenv.config({ debug: process.env.DEBUG });

import express from 'express';
import next from 'next';
import cors from 'cors';
import morgan from 'morgan';

// Configure Next App
const port = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dir: '.',
    dev: dev,
});
// Handle provides response to request made to front end of app
const handle = app.getRequestHandler();

// Import API Routes
import { authRouter } from './routes/authRoutes.js';

// import { postRouter } from './routes/postRoutes.js';
// Import Database Connect
import connectDB from './db/connect.js';

app
    .prepare()
    .then(() => {
        // Configure Express Backend
        const server = express();

        const corsOptions = {
            origin: '*',
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            preflightContinue: false,
            optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
        };

        // Implement Middleware
        server.use(cors(corsOptions));
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
        // Invoke morgan logger middleware only in dev environment
        if (process.env.NODE_ENV !== 'production') {
            server.use(morgan('dev'));
        }

        // Establish Backend Routes
        server.use('/api/v1/', authRouter);
        // server.use('/api/v1/post', postRouter);

        // Establish Frontend Routes, '*' wildcard is route for frontend
        server.get('*', (req, res) => {
            return handle(req, res);
        });

        // Connect to Database
        // const connectDB = function (url) {
        //  return mongoose.set('strictQuery', true).connect(url);
        // };

        // Start Server
        const startServer = async function () {
            try {
                await connectDB(process.env.MONGO_URL);
                console.log(`SERVER is Connected to DATABASE...`);
                server.listen(port, () => {
                    console.log(`SERVER is Listening on PORT ${port}...`);
                });
            } catch (error) {
                console.error(error);
            }
        };

        startServer();
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });