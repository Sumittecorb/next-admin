import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, "Please Provide Language Name"],
        unique: true
    },
    value: {
        type: Number,
        required: [false, "Please Provide value"],
        unique: true 
    },
    lowerName: {
        type: String,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
})
const Language = mongoose.models.language || mongoose.model("language", languageSchema);

export default Language;