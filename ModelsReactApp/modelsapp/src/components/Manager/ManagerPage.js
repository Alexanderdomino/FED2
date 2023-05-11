import React from 'react';

import CreateModel from './CreateModel';
import CreateManager from './CreateManager';
import AddJob from '../AddJob/AddJob';
import {AssignModelToJob} from "../AssignModelToJob/AssignModelToJob";
import {DeleteModelFromJob} from "../DeleteModelFromJob/DeleteModelFromJob";


const ManagerPage = () => {
    return (
        <div>
            <h1>Model Manager</h1>
            <CreateModel />
            <CreateManager />
            <AddJob />
            <AssignModelToJob />
            <DeleteModelFromJob />
        </div>
    );
};

export default ManagerPage;
