import React from 'react';
import './Manager.css';
import CreateModel from './CreateModel';
import CreateManager from './CreateManager';
import AddJob from '../AddJob/AddJob';
import { Navbar } from '../Navbar/Navbar';


const ManagerPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Model Manager</h1>
            <CreateModel />
            <CreateManager />
            <AddJob />
        </div>
    );
};

export default ManagerPage;
