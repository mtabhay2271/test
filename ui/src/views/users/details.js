import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import {DeleteProfile, GetUserProfile, UpdateUserProfile} from '../../services/api/users'

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        mobile: '',
        zipCode: '',
        profilePic: ''
    });
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        // Fetch user data from the backend upon component mount
        const fetchUserData = async () => {
            try {
                const response = await GetUserProfile()
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfilePicFile(file);

        // Show image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveImage = async () => {
        try {
            // Send a request to remove the profile picture
            const response = await DeleteProfile()
            console.log('Profile picture removed:', response.data);
            setUserData(prevUserData => ({
                ...prevUserData,
                profilePic: '' // Clear the profile picture URL
            }));
            setImagePreview(''); // Clear the image preview
        } catch (error) {
            console.error('Error removing profile picture:', error);
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('email', userData.email);
            formData.append('phone', userData.phone);
            formData.append('mobile', userData.mobile);
            formData.append('zipCode', userData.zipCode);
            if (profilePicFile) {
                formData.append('profilePic', profilePicFile);
            }

            const response = await UpdateUserProfile( formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `${sessionStorage.getItem('token')}`
                }
            });
            console.log('Profile updated:', response.data);
            setUserData(response.data); // Update user data after successful update
            setEditMode(false); // Exit edit mode after updating profile
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" gutterBottom>
                User Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center' }}>
                        {imagePreview ? (
                            <img src={imagePreview} alt="Profile" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                        ) : (
                            <img src={`http://localhost:7000/${userData.profilePic}`} alt="Profile" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                        )}
                        {editMode && !userData.profilePic && !imagePreview && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ marginTop: '1rem' }}
                            />
                        )}
                        {userData.profilePic && (
                            <Button variant="outlined" color="secondary" onClick={handleRemoveImage} style={{ marginTop: '1rem' }}>Remove Image</Button>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '1rem' }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="email"
                            value={userData.email}
                            disabled
                        />
                        <TextField
                            label="Phone"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                        <TextField
                            label="Mobile"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="mobile"
                            value={userData.mobile}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                        <TextField
                            label="Zip Code"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="zipCode"
                            value={userData.zipCode}
                            onChange={handleInputChange}
                            disabled={!editMode}
                        />
                        {editMode ? (
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleUpdateProfile}
                                style={{ marginTop: '1rem' }}
                            >
                                Save Changes
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => setEditMode(true)}
                                style={{ marginTop: '1rem' }}
                            >
                                Edit Profile
                            </Button>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserProfile;
