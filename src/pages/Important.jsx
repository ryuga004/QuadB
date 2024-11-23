import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/Taskcard';

const ImportantPage = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];

    const importantTasks = tasks.filter((task) => task.priority === 'High');
    return (

        <>
            <CssBaseline />
            <Navbar />
            <Box display="flex" width="100%" height="100vh" mt={2}>
                <Box
                    width={{ xs: '100%', sm: '20%' }}
                    p={2}
                    display="flex"
                >
                    <Sidebar />
                </Box>
                <Box
                    width={{ xs: '100%', sm: '80%' }}
                    p={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                >
                    <Typography variant="h4" sx={{ mb: 2 }}>Important Tasks</Typography>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            paddingBottom: 2,
                            overflowX: 'auto',
                            flexDirection: { xs: 'column', sm: 'row' },
                            flexWrap: 'wrap',
                        }}
                    >
                        {importantTasks.map((task) => (
                            <Grid item xs={12} sm={6} md={4} key={task.id}>
                                <TaskCard task={task} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Box>
        </>
    );
};

export default ImportantPage;
