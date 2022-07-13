import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Coaching from '../Pages/expert/Coaching';
import CoachingWrite from '../Pages/expert/CoachingWrite';
import CoachingRead from '../Pages/expert/CoachingRead';
import Home from '../Pages/Home/Home';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coachingWrite/:id" element={<CoachingWrite />} />
            <Route path="/coachingRead/:id" element={<CoachingRead />} />
        </Routes>
    );
}

export default Router;
