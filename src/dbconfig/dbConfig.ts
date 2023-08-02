// import mongoose from "mongoose";

// export async function connect() {

//     try {
//         mongoose.connect(process.env.MONGO_URL!)
//         const connection = mongoose.connection

//         connection.on('connected', () => {
//             console.log('mongodb connected successfully');
//         })
//         connection.on('error', (err) => {
//             console.log('mongoDB connection error. Please make sure MongoDB is running.' + err)
//             process.exit()
//         })
//     }
//     catch (error) {
//         console.log(error, "something gone wrong");
//     }
// }

import mongoose from 'mongoose';
const connectMongo = async () => {
    try {
        const url = process.env.MONGO_URL
        const { connection } = await mongoose.connect(url!)
        if (connection.readyState == 1) {
            console.log("Database Connectedsss")
        }
        else {
            console.log("errors");
        }

    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo;