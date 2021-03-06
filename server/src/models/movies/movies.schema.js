import mongoose from "mongoose";

export const MovieSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "Title is required"],
            unique: true
        },
        description: { type: String, required: [true, "Description is required"]},
        img: { type: String, required: [true, "At least an image is required"] },
        imageTitle: { type: String },
        imageSmall: { type: String },
        trailer: { type: String },
        video: { type: String },
        year: { type: String },
        limit: { type: Number },
        genre: { type: String },
        isMovie: { type: Boolean, default: true },
    },
    {
        timestamps: true
    }
);

MovieSchema.set('toJSON', { virtuals: true });

export const MovieModel = mongoose.model("Movie", MovieSchema);
