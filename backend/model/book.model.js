import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
        category: String,
        image: String,
        title: String,
        
    }
)

export default mongoose.model("Book", bookSchema);