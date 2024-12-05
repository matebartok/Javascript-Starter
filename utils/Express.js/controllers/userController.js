// src/controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Example User model

exports.getUsers = (req, res) => {
    res.json({ message: 'List of users' });
  };
  
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User details for ID: ${userId}` });
  };
  
  exports.createUser = (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
  };
  
  exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: `User ${userId} updated`, user: updatedUser });
  };
  
  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ${userId} deleted` });
  };

  exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  
    res.json({ message: 'Login successful', accessToken });
  };
  