import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupComplete from './pages/Signup/SignupComplete';
import SignupDetail from './pages/Signup/SignupDetail';
import Profile from './pages/Profile/Profile';
import ProfileUpdate from './pages/Profile/ProfileUpdate';

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
