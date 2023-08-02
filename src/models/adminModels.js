import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
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
        default: true
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

// const Admin = mongoose.model.admin || mongoose.model
//     ("admin", adminSchema)
module.exports = mongoose.model('admin', adminSchema); 

// export default Admin