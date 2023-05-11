import React from 'react';
import CreateModel from './CreateModel';
import CreateManager from './CreateManager';
import { Navbar } from '../Navbar/Navbar';


const ManagerPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Model Manager</h1>
            <CreateModel />
            <CreateManager />
        </div>
    );
};

export default ManagerPage;
