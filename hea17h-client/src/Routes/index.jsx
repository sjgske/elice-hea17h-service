import { Routes, Route } from 'react-router-dom';
import Coaching from '../Pages/expert/Coaching';
import CoachingWrite from '../Pages/expert/CoachingWrite';
import CoachingRead from '../Pages/expert/CoachingRead';

function Router() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coachingWrite" element={<CoachingWrite />} />
            <Route path="/coachingRead" element={<CoachingRead />} />
        </Routes>
    );
}

export default Router;
