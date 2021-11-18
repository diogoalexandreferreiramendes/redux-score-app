import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import DashboardAdmin from '../pages/DashboardAdmin';
import DashboardUser from '../pages/DashboardUser';
import Home from '../pages/Home';


const routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                        <Route path="admin" element={<DashboardAdmin />} />
                        <Route path="user" element={<DashboardUser />} />
                    </Routes>
            </BrowserRouter>
        </div>
    )
}

export default routes
