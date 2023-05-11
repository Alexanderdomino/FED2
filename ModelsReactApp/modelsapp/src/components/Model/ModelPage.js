import React from 'react';
import { ShowJobs } from '../ShowJobs/ShowJobs';
import { AddExpense } from '../AddExpense/AddExpense';

const ModelPage = () => {
    return (
        <div>
            <h1>Model </h1>
            <ShowJobs />
            <AddExpense />
        </div>
    );
};

export default ModelPage;
