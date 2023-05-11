import React from 'react';
<<<<<<< HEAD
import { ShowJobs } from '../ShowJobs/ShowJobs';
import { AddExpense } from '../AddExpense/AddExpense';

const ModelPage = () => {
    return (
        <div>
            <h1>Model </h1>
            <ShowJobs />
            <AddExpense />
=======
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";


const ManagerPage = () => {
    return (
        <div>
            <h1>Welcome to the Model Page</h1>
            <Navbar />
            <Outlet />
            <br/>
>>>>>>> 5c52560fdf69422ef88f65496958929161f5791d
        </div>
    );
};

<<<<<<< HEAD
export default ModelPage;
=======
export default ManagerPage;
>>>>>>> 5c52560fdf69422ef88f65496958929161f5791d
