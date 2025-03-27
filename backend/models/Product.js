const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Service name
  category: { type: String, required: true }, // E.g., Plumbing, Cleaning, AC Repair
  description: { type: String, required: true }, // Service details
  image: { type: String }, // Image URL (optional)
  price: { type: Number, required: true }, // Service price
  duration: { type: String, required: true }, // Time required (e.g., "2 hours")
  provider: { type: String, required: true }, // Service provider name
  location: { type: String, required: true }, // Service area (e.g., "Indore")
  availableSlots: [{ type: Date }], // Available time slots for booking
  ratings: { type: Number, default: 0 }, // Average rating
  reviews: [{ user: String, comment: String, rating: Number }], // Customer reviews
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", ServiceSchema);
