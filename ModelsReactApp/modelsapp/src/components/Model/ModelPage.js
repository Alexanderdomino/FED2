import React from 'react';
import {AssignModelToJob} from '../AssignModelToJob/AssignModelToJob';
import {DeleteModelFromJob} from "../DeleteModelFromJob/DeleteModelFromJob";
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";


const ManagerPage = () => {
    return (
        <div>
            <h1>Welcome to the Model Page</h1>
            <Navbar />
            <Outlet />
            <br/>
            <AssignModelToJob />
            <DeleteModelFromJob />
        </div>
    );
};

export default ManagerPage;