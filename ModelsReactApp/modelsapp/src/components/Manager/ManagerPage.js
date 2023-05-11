import React from 'react';
import CreateModel from './CreateModel';
import CreateManager from './CreateManager';
import AddJob from '../AddJob/AddJob';
import { Navbar } from '../Navbar/Navbar';


const ManagerPage = () => {
    return (
        <div>
            <h1>Model Manager</h1>
            <Navbar />
            <CreateModel />
            <CreateManager />
            <AddJob />
        </div>
    );
};

export default ManagerPage;
