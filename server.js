const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message' 
    });
  }
});

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN e-commerce with payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/snehalsable10',
      live: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task manager',
      tech: ['React', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/snehalsable10',
      live: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio built with MERN stack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/snehalsable10/portfolio-frontend',
      live: 'https://portfolio.com'
    }
  ];
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm']
  };
  res.json(skills);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});