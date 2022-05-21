import mongoose from "mongoose";

export const MoviesSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "Title is required"],
            unique: true
        },
        description: { type: String },
        img: { type: String },
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

MoviesSchema.set('toJSON', { virtuals: true });

export const MovieModel = mongoose.model("Movie", MoviesSchema);