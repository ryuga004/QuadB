import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_KEY = '466d7a95e259dca9974c2727c7c517d6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location, { rejectWithValue }) => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    q: location,
                    units: 'metric',
                    appid: API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch weather data.');
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearWeather: (state) => {
            state.weather = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weather = action.payload;
                state.loading = false;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { clearWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
