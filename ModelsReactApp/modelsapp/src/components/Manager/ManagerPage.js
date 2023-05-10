import React from 'react';
import CreateModel from './CreateModel';
import CreateManager from './CreateManager';

const ManagerPage = () => {
    return (
        <div>
            <h1>Model Manager</h1>
            <CreateModel />
            <CreateManager />
        </div>
    );
};

export default ManagerPage;
