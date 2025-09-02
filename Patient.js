const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema(
  {
    spo2: Number,
    heartRate: Number,
    weight: Number,
    height: Number,
    recordedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: Number,
    gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Other' },
    diagnosis: String,
    report: String, // file path
    chronicDiseases: [String],
    vitals: [vitalsSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);