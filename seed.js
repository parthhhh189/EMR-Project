require('dotenv').config();
const bcrypt = require('bcrypt');
const connectDB = require('../config/db');
const User = require('../models/User');

(async () => {
  await connectDB();
  const email = 'admin@example.com';
  const password = 'Admin@12345';
  const exists = await User.findOne({ email });
  if (!exists) {
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ name: 'Admin', email, password: hashed, role: 'admin' });
    console.log('Seeded admin:', email, password);
  } else {
    console.log('Admin already exists');
  }
  process.exit(0);
})();