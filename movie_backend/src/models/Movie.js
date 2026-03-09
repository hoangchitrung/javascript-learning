import mongoose from "mongoose";
const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: {
            type: String,
            required: false
        },
        genre: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    },
    { timestamps: true });
export default mongoose.model("Movie", movieSchema);