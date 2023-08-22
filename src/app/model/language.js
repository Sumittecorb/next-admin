import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Language Name"],
        unique: true
    },
    value: {
        type: Number,
        required: [false, "Please Provide value"],
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