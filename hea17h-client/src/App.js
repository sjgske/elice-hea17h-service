import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DietList from './pages/diet/DietList';
import Comment from './pages/comment/Comment';
import Certify from './pages/certify/Certify';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/diet/list" element={<DietList />} />
                <Route path="/comment" element={<Comment />} />
                <Route path="/certify" element={<Certify />} />
            </Routes>
        </Router>
    );
}
