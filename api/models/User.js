const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    mobile: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    profilePic: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            index: '2dsphere' // Index for geospatial queries
        }
    }
});

module.exports = mongoose.model('User', userSchema);
