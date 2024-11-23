import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/tasksSlice';
import {
    Card,
    CardContent,
    Typography,
    Chip,
    IconButton,
    Box,
    Divider,
    Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WeatherTask from './Weather';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    const handleCompleteToggle = () => {
        dispatch(toggleComplete(task.id));
    };

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <Card
            sx={{
                boxShadow: 2,
                marginBottom: 1.5,
                borderRadius: 1,
                width: '100%',
                minWidth: '280px', // Card expands based on content but has a minimum width
                padding: 1.5, // Compact padding
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <CardContent sx={{ padding: 1 }}>
                {/* Task Title and Checkbox */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            flexGrow: 1, // Allow title to expand and fit text
                        }}
                    >
                        {task.title}
                    </Typography>
                    <Checkbox
                        checked={task.completed}
                        onChange={handleCompleteToggle}
                        color="primary"
                        size="small" // Smaller checkbox
                    />
                </Box>

                {/* Task Note */}
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {task.note}
                </Typography>

                {/* Due Date */}
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                    }}
                >
                    Due: {new Date(task.date).toLocaleDateString()}
                </Typography>

                {/* Priority Chip */}
                <Chip
                    label={task.priority}
                    color={
                        task.priority === 'High'
                            ? 'error'
                            : task.priority === 'Medium'
                                ? 'warning'
                                : 'success'
                    }
                    size="small" // Smaller chip
                    sx={{
                        marginBottom: 1,
                        fontSize: '0.75rem',
                    }}
                />

                <Divider sx={{ marginBottom: 0.5 }} />

                {/* Task Status */}
                <Typography
                    variant="body2"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                    }}
                >
                    <strong>Status: </strong>
                    {task.completed ? 'Completed' : 'Pending'}
                </Typography>

                {/* Delete Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        color="error"
                        onClick={handleDeleteTask}
                        size="small" // Smaller delete icon
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>


            </CardContent>
        </Card>
    );
};

export default TaskCard;
