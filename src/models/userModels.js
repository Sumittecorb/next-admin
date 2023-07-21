import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide userName"],
        unique: true
    },
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
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.model.user || mongoose.model
    ("users", userSchema)

export default User