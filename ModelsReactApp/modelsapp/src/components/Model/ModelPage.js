import React from 'react';
import { ShowJobs } from '../ShowJobs/ShowJobs';
import { AddExpense } from '../AddExpense/AddExpense';
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const ModelPage = () => {
    return (
        <div>
            <h1>Welcome to the Model Page</h1>
            <Navbar />
            <Outlet />
            <br/>
            <h1>Model </h1>
            <ShowJobs />
            <AddExpense />
        </div>
    );
};

