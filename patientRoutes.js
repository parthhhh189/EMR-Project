const express = require('express');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const { list, create, remove } = require('../controllers/patientController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get('/', auth, list);
router.post('/', auth, upload.single('report'), create);
router.delete('/:id', auth, remove);

module.exports = router;