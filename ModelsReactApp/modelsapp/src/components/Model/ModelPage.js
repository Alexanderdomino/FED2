import React from 'react';
import { ShowJobs } from '../ShowJobs/ShowJobs';
import { AddExpense } from '../AddExpense/AddExpense';
import {Outlet} from "react-router-dom";

const ModelPage = () => {
    return (
        <div>
            <h1>Model </h1>
            <Outlet />
            <br/>
            <ShowJobs />
            <AddExpense />
            <br/>
        </div>
    );
};
export default ModelPage;

