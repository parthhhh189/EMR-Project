const Patient = require('../models/Patient');

exports.list = async (_req, res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
};

exports.create = async (req, res) => {
  try {
    const { name, age, gender, diagnosis, chronicDiseases, vitals } = req.body;
    const report = req.file ? req.file.path : undefined;

    const patient = await Patient.create({
      name,
      age,
      gender,
      diagnosis,
      chronicDiseases,
      vitals,
      report
    });

    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(404).json({ message: 'Patient not found' });
  }
};