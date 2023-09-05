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
        default: true,
        select:false
    },
    isDelete: {
        type: Boolean,
        default: false,
        select:false
    },
})
const Language = mongoose.models.language || mongoose.model("language", languageSchema);

export default Language;