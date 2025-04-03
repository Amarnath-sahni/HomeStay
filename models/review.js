// const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

// module.exports = require("Review", reviewSchema);

let Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;