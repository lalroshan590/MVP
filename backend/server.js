// Swasthya Sathi - Open Source Express Server (Node.js, MongoDB)
// All libraries used are free and open source. No proprietary code.

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/swasthya', {
  useNewUrlParser: true, useUnifiedTopology: true
});

// Minimal open source models
const User = mongoose.model('User', { name: String, lang: String });
const Doctor = mongoose.model('Doctor', { name: String, specialty: String, online: Boolean });

app.post('/api/register', async (req, res) => {
  const { name, lang } = req.body;
  const user = new User({ name, lang });
  await user.save();
  const token = jwt.sign({ userId: user._id }, 'swasthya_secret');
  res.json({ token });
});

app.get('/api/find-doctor', async (req, res) => {
  const doc = await Doctor.findOne({ online: true }).sort({}).limit(1);
  if (!doc) return res.status(503).json({ error: 'No doctor available' });
  res.json({ doctor: doc });
});

app.post('/api/consult', async (req, res) => {
  // Simulate consult record and e-prescription
  const { userId, doctorId, symptoms } = req.body;
  // ...save to DB, generate prescription (stub)
  res.json({
    prescription: 'Take paracetamol 500mg, rest. If no improvement, consult again.',
    doctor: doctorId,
    user: userId
  });
});

app.listen(3001, () => console.log('Swasthya Sathi backend running on 3001'));