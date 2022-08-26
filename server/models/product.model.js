const mongoose = require("mongoose");

const Stokd = new mongoose.Schema(
  {
    img: {
      type: String,
      // required: [true, "Please add an image link"]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        minlength: [3, "Name must be at least 3 characters long"]
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [3, "Location must be at least 3 characters long"]
    },
    level: {
        type: String,
        enum: ['beginner', 'amateur', 'advanced', 'expert'],
        required: [true, 'Skill level is required']
    },
    board: {
        type: String,
        enum: ['shortboard', 'longboard'],
        required: [true, 'Board type is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be at least 0']
    }
  },
  { timestamps: true}
);

module.exports.Product = mongoose.model("Product", Stokd);
