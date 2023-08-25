import mongoose from "mongoose";

const programmingLanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Programming Language Name"],
        unique: true
    },
    progress: {
        type: Number,
        required: [true, "Please Provide Progress"],
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
const ProgrammingLanguage = mongoose.models.programmingLanguage || mongoose.model("programmingLanguage", programmingLanSchema);

export default ProgrammingLanguage;