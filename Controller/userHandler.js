const User = require('../Model/userModel.js');

exports.signUp = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Validation for duplicate user
    let duplicateUser = await User.findOne({ email: req.body.email });
    if (duplicateUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    const user = new User({ first_name, last_name, email, password });

    // Save the user to the database
    await user.save();

    res.json({ success: true, message: 'User signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error signing up user' });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email and password
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: 'User signed in successfully' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error signing in user' });
  }
};
