import React from 'react';
import LeftMenu from './LeftMenu';
import { Outlet } from 'react-router-dom';

const admin = () => {
    return (
        <div>
            <p>I am from admin page</p>
            <LeftMenu/>
            <Outlet/>
        </div>
    );
};

export default admin;