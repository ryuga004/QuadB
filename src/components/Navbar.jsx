import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };



    return (
        <AppBar
            position="sticky"
            color="primary"
            sx={{
                zIndex: 1200,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    paddingX: 2,
                }}
            >

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>


                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,


                    }}

                >
                    DoIt
                </Typography>


                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
