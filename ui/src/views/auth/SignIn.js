import React, { useState } from 'react';
import { TextField, Button, Container, Link } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { SignIn } from '../../services/api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SignIn({ email, password });
      console.log('Login successful:', response.data);
      // Redirect to dashboard or profile page upon successful login
      sessionStorage.setItem('token', response.data)
      history.push('/users');

    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                Don't have an account? <Link href="/auth/signup">Sign Up</Link>
            </p>
    </Container>
  );
};

export default Login;
