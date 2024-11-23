import React from 'react';
import {
    Avatar,
    Box,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSelector } from 'react-redux';
import ProfileImage from '../image/a.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 2,
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                width: { xs: '100%', sm: 280 },
                position: { xs: 'relative', sm: 'sticky' },
                top: { sm: 64 },
                zIndex: 1,
            }}
        >
            <Avatar
                src={ProfileImage}
                alt={user?.name || 'User'}
                sx={{
                    width: 100,
                    height: 100,
                    mb: 1,
                    border: '3px solid #1976d2',
                }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {user?.name || 'Guest User'}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                {isAuthenticated ? 'Welcome Back!' : 'Sign in to manage tasks'}
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }} />
            <List sx={{ width: '100%' }}>
                {[
                    { text: 'Tasks', icon: <TodayIcon />, route: '/home' },
                    { text: 'Important', icon: <StarIcon />, route: '/important' },
                    { text: 'Completed', icon: <AssignmentIcon />, route: '/completed' },
                ].map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        component={Link}
                        to={item.route}
                        sx={{
                            borderRadius: 1,
                            '&:hover': { backgroundColor: '#f0f4ff', color: '#1976d2' },
                            p: 1.5,
                        }}
                    >
                        <ListItemIcon sx={{ color: '#1976d2' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Sidebar;
