import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> db27415c48eb203da0b8a9caa5aa1cab870fab58
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupComplete from './pages/Signup/SignupComplete';
import SignupDetail from './pages/Signup/SignupDetail';
<<<<<<< HEAD
import Diet from './pages/Diet/Diet';
import DietSearch from './pages/Diet/DietSearch';
=======
>>>>>>> db27415c48eb203da0b8a9caa5aa1cab870fab58
import Profile from './pages/Profile/Profile';
import ProfileUpdate from './pages/Profile/ProfileUpdate';

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
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
=======
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/signup/complete"
                        element={<SignupComplete />}
                    />
                    <Route path="/signup/detail" element={<SignupDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/update" element={<ProfileUpdate />} />
                </Routes>
            </BrowserRouter>
>>>>>>> db27415c48eb203da0b8a9caa5aa1cab870fab58
        </div>
    );
}

export default App;
