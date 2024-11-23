import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, CssBaseline } from '@mui/material';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TaskList from '../components/Tasklist';

const HomePage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (

        <>
            <CssBaseline />
            <Navbar />

            <Box display="flex" width="100%" height="100vh" mt={2}>

                <Box
                    width="20%"

                    p={2}
                    display="flex"

                >
                    <Sidebar />
                </Box>


                <Box
                    width="80%"
                    p={2}
                    display="flex"

                >
                    <TaskList />
                </Box>
            </Box>
        </>
    );
};

export default HomePage;
