import React, { useState } from 'react';
import { TextField, Button, Container, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { SignUp } from '../../services/api/auth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [lat, setLat] = useState(''); // New state for latitude
    const [lang, setLang] = useState(''); // New state for longitude
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const response = await SignUp( {
                name,
                email,
                password,
                phone,
                mobile,
                zipCode,
                profilePic,
                lat, // Include latitude in the request
                lang, // Include longitude in the request
            });
            console.log('Signup successful:', response.data);
            // Redirect to login page upon successful signup
            history.push('/auth/signin');
        } catch (err) {
            setError('Signup failed. Please try again.'); // Handle error response
        }
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    label="Mobile"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <TextField
                    label="Zip Code"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <TextField
                    label="Latitude" // Add input field for latitude
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
                <TextField
                    label="Longitude" // Add input field for longitude
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                />
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign Up
                </Button>

            </form>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                Already have an account? <Link href="/auth/signin">Go to Login</Link>
            </p>
        </Container>
    );
};

export default Signup;
