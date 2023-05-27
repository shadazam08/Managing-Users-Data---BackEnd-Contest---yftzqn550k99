// //Note: You have to edit only this file
const User = require('../models/userModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

// Get a user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user.' });
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    Object.assign(user, req.body);
    await user.save();
    res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    await user.remove();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

// Export the controller functions
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
};
