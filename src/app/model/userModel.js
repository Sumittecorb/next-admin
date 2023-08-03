import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please Provide a Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    designation: {
        type: String,
    },
    menu: {
        type: Boolean
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})
const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;