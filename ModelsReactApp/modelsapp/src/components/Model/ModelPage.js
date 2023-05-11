import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";


const ManagerPage = () => {
    return (
        <div>
            <h1>Welcome to the Model Page</h1>
            <Navbar />
            <Outlet />
            <br/>
        </div>
    );
};

export default ManagerPage;