const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const verifyToken = require('../middleware/authMiddleware');
const User = require('../models/User');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = './uploads/profile';
        fs.mkdirSync(uploadPath, { recursive: true }); // Create directory if it doesn't exist
        cb(null, uploadPath); // Destination folder for profile pictures
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    }
});
const upload = multer({ storage });




// Get user profile
router.get('/profile', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user profile
router.put('/profile', verifyToken, upload.single('profilePic'), async (req, res) => {
    try {
        // Fetch user data from the database
        let user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user profile data
        const { name, email, phone, mobile, zipCode } = req.body;
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.mobile = mobile;
        user.zipCode = zipCode;
        if (req.file) {
            // If profile picture is uploaded, update profilePic field
            user.profilePic = req.file.path;
        }
        await user.save();

        res.json(user); // Return updated user profile data
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/profile/image', verifyToken, async (req, res) => {
    try {
        // Find the user by ID
        const user = await User.findById(req.user._id);

        // Check if the user has a profile picture
        if (!user.profilePic) {
            return res.status(400).json({ message: 'User does not have a profile picture.' });
        }

        // Remove the profile picture path from the user object
        user.profilePic = '';

        // Save the updated user object
        await user.save();

        // Respond with success message
        res.json({ message: 'Profile picture removed successfully.' });
    } catch (error) {
        console.error('Error removing profile picture:', error);
        res.status(500).json({ message: 'An error occurred while removing the profile picture.' });
    }
});

router.get('/nearest-users', verifyToken, async (req, res) => {
    try {
        // Get the coordinates of the logged-in user
        const loggedInUser = await User.findById(req.user._id);
        const { coordinates } = loggedInUser.location;

        // Find 5 nearest users based on distance
        const nearestUsers = await User.aggregate([
            {
                $geoNear: {
                    near: {
                        type: 'Point',
                        coordinates: coordinates
                    },
                    distanceField: 'distance',
                    spherical: true,
                    query: {
                        _id: { $ne: req.user._id }, // Exclude the logged-in user
                        'location.coordinates': { $exists: true } // Ensure users have location coordinates
                    }
                }
            },
            { $limit: 5 }
        ]);

        res.json(nearestUsers);
    } catch (err) {
        console.error('Error fetching nearest users:', err);
        res.status(500).json({ message: 'An error occurred while fetching nearest users.' });
    }
});



module.exports = router;
