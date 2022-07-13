import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupComplete from './pages/Signup/SignupComplete';
import SignupDetail from './pages/Signup/SignupDetail';
import Diet from './pages/Diet/Diet';
import DietSearch from './pages/Diet/DietSearch';
import Profile from './pages/Profile/Profile';
import ProfileUpdate from './pages/Profile/ProfileUpdate';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup/complete" element={<SignupComplete />} />
                <Route path="/signup/detail" element={<SignupDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/update" element={<ProfileUpdate />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/diet/search" element={<DietSearch />} />
            </Routes>
        </div>
    );
}

export default App;
