const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            required: [true, "Please enter product quantity"],
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true // Note the lowercase 't' and plural 's'
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
