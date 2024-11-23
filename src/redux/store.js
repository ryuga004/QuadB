import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import taskReducer from './tasksSlice';
import { combineReducers } from 'redux';
import weatherReducer from './weatherSlice';

const tasksTransform = createTransform(

    (inboundState) => {
        return {
            tasks: JSON.stringify(inboundState.tasks),
        };
    },

    (outboundState) => {
        return {
            tasks: outboundState.tasks ? JSON.parse(outboundState.tasks) : [],
        };
    },
    { whitelist: ['tasks'] }
);


const persistConfig = {
    key: 'root',
    storage,
    transforms: [tasksTransform],
};

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
