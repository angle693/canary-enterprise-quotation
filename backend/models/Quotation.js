// backend/models/Quotation.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const quotationSchema = new mongoose.Schema({
  quotationNumber: { type: String, required: true, unique: true }, // e.g., CE0016-21-22
  quotationDate: { type: Date, required: true },
  billTo: {
    name: String,
    address: String,
    city: String
  },
  items: [itemSchema],
  subtotal: { type: Number, required: true },
  cgstPercent: { type: Number, default: 9 },
  cgstAmount: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  company: {
    name: { type: String, default: "Canary Enterprise" },
    address: { type: String, default: "957, R.R. Park Society, Harni Road, Vadodara-390022, Gujarat, India." },
    gstNumber: { type: String, default: "24BOGPG5365H1ZZ" },
    email: { type: String, default: "canaryenterprise@yahoo.com" },
    phone: { type: String, default: "(+91) 8347 123704" }
  }
}, { timestamps: true });

module.exports = mongoose.model('Quotation', quotationSchema);