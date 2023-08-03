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
        const url = process.env.MONGO_URL;
        const { connection } = await mongoose.connect(url!);
        if (connection.readyState === 1) {
            console.log("Database Connected");
        }
    } catch (errors) {
        return Promise.reject(errors);
    }
};

export default connectMongo;


// import mongoose from 'mongoose';
// const connectMongo = async () => {
//     try {
//         const url = process.env.MONGO_URL
//         const { connection } = await mongoose.connect(url!)
//         if (connection.readyState == 1) {
//             console.log("Database Connectedsss")
//         }
//         // else {
//         //     console.log("errors");
//         // }

//     } catch (errors) {
//         return Promise.reject(errors)
//     }
// }

// export default connectMongo;

// var mongoose = require('mongoose');
// var User = require("@/models/userModels");

// mongoose.connect('mongodb://localhost/event-db');
// var new_user = new User({
//     name:req.body.name
//   , email: req.body.email
//   , password: req.body.password
//   , phone: req.body.phone
//   , _enabled:false 
// });
// new_user.save(function(err){
//   if(err) console.log(err); 
// });


// import mongoose from 'mongoose';

// const adminSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, "Please Provide a Email"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "Please Provide a password"],
//         unique: true
//     },
//     isVerified: {
//         type: Boolean,
//         default: false
//     },
//     isAdmin: {
//         type: Boolean,
//         default: true
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date
// });
// export const Admin = mongoose.models.admin || mongoose.model('admin', adminSchema);


// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, "Please Provide a Email"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "Please Provide a password"],
//         unique: true
//     },
//     isVerified: {
//         type: Boolean,
//         default: false
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false
//     },
//     name: {
//         type: String
//     },
//     title: {
//         type: String
//     },
//     description: {
//         type: String,
//     },
//     shortDescription: {
//         type: String,
//     },
//     designation: {
//         type: String,
//     },
//     menu: {
//         type: Boolean
//     },

//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date
// });

// export const User = mongoose.models.user || mongoose.model('user', userSchema);
