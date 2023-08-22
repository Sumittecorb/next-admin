import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, "Please Provide Category Name"],
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
const Category = mongoose.models.categories || mongoose.model("categories", categorySchema);

export default Category;