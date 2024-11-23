import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/tasksSlice';
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Checkbox,
    Divider,
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Chip,
    Typography,
    Accordion,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Description';

import ListForm from './Addtask';
import { Close as CloseIcon } from '@mui/icons-material';
import WeatherTask from './Weather';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];
    const dispatch = useDispatch();
    const incompleteTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    const [selectedTask, setSelectedTask] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(true);

    const handleDetailsToggle = () => {
        setIsDetailsOpen(!isDetailsOpen);
    };

    return (
        <Container sx={{ maxWidth: 'lg', paddingTop: 4 }}>
            <Grid container spacing={4}>
                {/* Task List */}
                <Grid item xs={12} sm={12} md={selectedTask ? 6 : 12}>
                    <Box sx={{ boxShadow: 3, p: 3, backgroundColor: 'white', borderRadius: 2 }}>
                        <ListForm />

                        <List sx={{ marginBottom: 4 }}>
                            {incompleteTasks.map((task) => (
                                <ListItem
                                    key={task.id}
                                    divider
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <Checkbox
                                        checked={task.completed}
                                        onChange={() => dispatch(toggleComplete(task.id))}
                                    />
                                    <ListItemText
                                        primary={task.title}
                                        secondary={` Due: ${task.date}`}
                                    />

                                    <Chip
                                        label={task.priority}
                                        color={
                                            task.priority === 'High'
                                                ? 'error'
                                                : task.priority === 'Medium'
                                                    ? 'warning'
                                                    : 'success'
                                        }
                                        sx={{ marginBottom: 1 }}
                                    />

                                    <IconButton
                                        edge="end"
                                        aria-label="view"
                                        onClick={() => setSelectedTask(task)}
                                    >
                                        <InfoIcon />
                                    </IconButton>

                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => dispatch(deleteTask(task.id))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            Completed Tasks
                        </Typography>
                        <List>
                            {completedTasks.map((task) => (
                                <ListItem
                                    key={task.id}
                                    divider
                                    sx={{ paddingLeft: 0 }}
                                >
                                    <Checkbox
                                        checked={task.completed}
                                        onChange={() => dispatch(toggleComplete(task.id))}
                                    />
                                    <ListItemText
                                        primary={
                                            <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                                                {task.title}
                                            </span>
                                        }
                                    />

                                    <IconButton
                                        edge="end"
                                        aria-label="view"
                                        onClick={() => setSelectedTask(task)}
                                    >
                                        <InfoIcon />
                                    </IconButton>

                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => dispatch(deleteTask(task.id))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>


                {selectedTask && (
                    <Grid item xs={12} sm={12} md={6}>
                        <Accordion
                            expanded={isDetailsOpen}
                            onChange={handleDetailsToggle}
                            sx={{
                                boxShadow: 3,
                                backgroundColor: '#f5f5f5',
                                borderRadius: 2,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    boxShadow: 3,
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    backgroundImage: 'linear-gradient(to right, #e3f2fd, #ffffff)',
                                }}
                            >
                                <CardContent sx={{ position: 'relative', padding: 3 }}>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={() => setSelectedTask(null)}
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            right: 12,
                                            backgroundColor: '#f44336',
                                            color: '#fff',
                                            '&:hover': { backgroundColor: '#d32f2f' },
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            marginBottom: 2,
                                            fontWeight: 'bold',
                                            color: '#0d47a1',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {selectedTask.title}
                                    </Typography>

                                    <Divider sx={{ marginBottom: 2, backgroundColor: '#2196f3' }} />

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            marginBottom: 2,
                                            fontStyle: 'italic',
                                            color: '#424242',
                                        }}
                                    >
                                        <strong>Note:</strong> {selectedTask.note}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            marginBottom: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            color: '#424242',
                                        }}
                                    >
                                        <strong>Date:</strong> {new Date(selectedTask.date).toLocaleDateString()}
                                    </Typography>

                                    <Chip
                                        label={`Priority: ${selectedTask.priority}`}
                                        color={
                                            selectedTask.priority === 'High'
                                                ? 'error'
                                                : selectedTask.priority === 'Medium'
                                                    ? 'warning'
                                                    : 'success'
                                        }
                                        sx={{
                                            marginBottom: 2,
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    />

                                    <Box sx={{ marginBottom: 3 }}>
                                        <WeatherTask task={selectedTask} />
                                    </Box>



                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: selectedTask.completed ? '#4caf50' : '#f57c00',
                                        }}
                                    >
                                        <strong>Status:</strong> {selectedTask.completed ? 'Completed' : 'Pending'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Accordion>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default TaskList;
