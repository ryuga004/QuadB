import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, clearWeather } from '../redux/weatherSlice';
import {
    Box,
    CircularProgress,
    Divider,
    Typography,
    Card,
    CardContent,
    Chip,
} from '@mui/material';
import { WbSunny as SunnyIcon, AcUnit as SnowIcon, Grain as RainIcon } from '@mui/icons-material';

const WeatherTask = ({ task }) => {
    const dispatch = useDispatch();
    const { weather, loading, error } = useSelector((state) => state.weather);

    useEffect(() => {
        if (task.location) {
            dispatch(fetchWeather(task.location));
        }
        return () => {
            dispatch(clearWeather());
        };
    }, [task.location, dispatch]);


    const getWeatherIcon = (description) => {
        if (description.includes('clear')) return <SunnyIcon sx={{ color: '#FFD700' }} />;
        if (description.includes('snow')) return <SnowIcon sx={{ color: '#87CEEB' }} />;
        if (description.includes('rain') || description.includes('drizzle'))
            return <RainIcon sx={{ color: '#1E90FF' }} />;
        return <SunnyIcon sx={{ color: '#FFD700' }} />;
    };

    return (
        <Card
            sx={{
                marginBottom: 2,
                boxShadow: 3,
                borderRadius: 2,
                padding: 2,
                backgroundImage: 'linear-gradient(to bottom right, #e3f2fd, #ffffff)',
            }}
        >
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', color: '#1565c0', marginBottom: 1 }}
                >
                    Current Weather in {task.location}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />


                {loading ? (
                    <CircularProgress size={24} />
                ) : error ? (
                    <Typography variant="body2" color="error">
                        {error}
                    </Typography>
                ) : weather ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <Box sx={{ marginRight: 2 }}>{getWeatherIcon(weather.weather[0].description)}</Box>


                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: '#424242',
                            }}
                        >
                            {weather.weather[0].description.charAt(0).toUpperCase() +
                                weather.weather[0].description.slice(1)}
                            , {weather.main.temp}°C
                        </Typography>
                    </Box>
                ) : null}


                {weather && (
                    <Chip
                        label={`Humidity: ${weather.main.humidity}%`}
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#b3e5fc',
                            color: '#01579b',
                            fontWeight: 'bold',
                        }}
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default WeatherTask;
