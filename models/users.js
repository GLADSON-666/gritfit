const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            match: /^[0-9]{10}$/  // optional: only 10-digit phone numbers
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true } // adds createdAt and updatedAt
)

const userModel = mongoose.model("User", userSchema)
module.exports = userModel
