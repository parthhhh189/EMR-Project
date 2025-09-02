const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true, unique: true, required: true },
    password: { type: String, required: true }, // hashed
    role: { type: String, enum: ['admin', 'doctor', 'staff'], default: 'staff' }
  },
  { timestamps: true }
);

// Helpful index
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);