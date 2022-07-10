import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Diet from './pages/';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/complete" element={<SignupComplete />} />
                    <Route path="/signup/detail" element={<SignupDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
