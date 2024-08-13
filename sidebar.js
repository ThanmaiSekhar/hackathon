import React from 'react';
import './hd.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h2>Connect.Safe.Enjoy</h2>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="/Medicalfacilities" className="active">Medical Facilities</a></li>
                    <li><a href="/Emergencyservices">Emergency Services</a></li>
                    <li><a href="/Complaints">Complaints</a></li>
                    <li><a href="/Ratings-Reviews">Ratings & Reviews</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;