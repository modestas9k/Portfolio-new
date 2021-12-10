import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopNavigation } from './components';
import { Home, Works } from './pages';

function App() {
    return (
        <Router>
            <div className="bg-yellow-200">
                <TopNavigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
