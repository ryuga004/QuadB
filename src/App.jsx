import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ImportantPage from './pages/Important';
import CompletedPage from './pages/Completed';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>


                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/important" element={<ImportantPage />} />
                        <Route path="/completed" element={<CompletedPage />} />

                    </Routes>


                </Router>
            </PersistGate >
        </Provider >
    );
};

export default App;
