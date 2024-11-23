import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button, MenuItem, Box, Typography, Paper, Grid } from '@mui/material';

const TaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        title: '',
        note: '',
        date: '',
        priority: 'Medium',
        location: '',
    });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ ...task, id: Date.now(), completed: false }));
        setTask({ title: '', note: '', date: '', priority: 'Medium', location: '' });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2, width: '100%' }}>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    padding: 4,
                    boxShadow: 6,
                    borderRadius: 3,
                    backgroundColor: '#f7f7f7',
                }}
            >
                <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 600, color: '#0D47A1' }}>
                    Create a New Task
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Task Title"
                            name="title"
                            value={task.title}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{ backgroundColor: 'white' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Task Note"
                            name="note"
                            value={task.note}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{ backgroundColor: 'white' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Due Date"
                            type="date"
                            name="date"
                            value={task.date}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            required
                            sx={{ backgroundColor: 'white' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Location"
                            name="location"
                            value={task.location}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            sx={{ backgroundColor: 'white' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Priority"
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            sx={{ backgroundColor: 'white' }}
                        >
                            {['High', 'Medium', 'Low'].map((priority) => (
                                <MenuItem key={priority} value={priority}>
                                    {priority}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                paddingX: 4,
                                paddingY: 1.5,
                                fontSize: '1rem',
                                boxShadow: 2,
                                '&:hover': {
                                    backgroundColor: '#1976D2',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            Add Task
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TaskForm;
