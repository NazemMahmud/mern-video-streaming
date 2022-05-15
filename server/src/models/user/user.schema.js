import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "name is required"],
            unique: true
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            minlength: [6, "Email minimum length is 6"],
            maxlength: 255,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        profilePicture: {
            type: String,
            default: ""
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

// UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

export const UserModel = mongoose.model("User", UserSchema);
