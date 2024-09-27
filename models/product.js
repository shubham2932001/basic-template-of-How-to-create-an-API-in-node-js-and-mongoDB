const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    featured: { // Changed from 'feature' to 'featured'
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Changed to Date.now (function reference)
    },
    company: {
        type: String,
        
    },
});

module.exports = mongoose.model("Product", productSchema);
