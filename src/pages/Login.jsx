import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { login } from '../redux/authSlice';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && password) {
            dispatch(login({ name }));
            navigate('/home');
        } else {
            alert('Please enter name and password');
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(to bottom, #ffffff, #f7f7f7)',
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >

                    <Box
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1976d2',
                            marginBottom: 2,
                        }}
                    >
                        <LockOutlinedIcon sx={{ color: '#fff', fontSize: 28 }} />
                    </Box>
                    <Typography variant="h5" fontWeight="bold" color="#1976d2" gutterBottom>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Please login to your account
                    </Typography>
                </Box>


                <Box component="form" onSubmit={handleSubmit} mt={4}>
                    <TextField
                        label="Name"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            marginTop: 3,
                            padding: 1.5,
                            textTransform: 'none',
                            fontSize: '1rem',
                            borderRadius: 2,
                            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                        }}
                    >
                        Login
                    </Button>
                </Box>



            </Paper>
        </Container>
    );
};

export default LoginPage;
