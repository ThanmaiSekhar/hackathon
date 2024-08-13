import React from 'react';
// import Sidebar from './Sidebar';
import Header from './header';
// import Header from './header';
import HospitalInfo from './hospitalInfo';
import './hd.css';
import Sidebar from './sidebar';
const HospitalDetails = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <HospitalInfo />
            </div>
        </div>
    );
};

export default HospitalDetails;