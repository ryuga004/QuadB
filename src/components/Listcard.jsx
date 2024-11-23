import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

    Typography,

    Grid,

    Box
} from '@mui/material';

import TaskCard from './Taskcard';

const HorizontalListCard = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];
    const dispatch = useDispatch();
    const importantTasks = tasks.filter((task) => task.priority === 'High');


    return (
        
    );
};

export default HorizontalListCard;
