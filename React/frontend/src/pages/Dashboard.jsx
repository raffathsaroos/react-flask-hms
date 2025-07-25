import React from 'react';
import './dashboard.css'; // We’ll create this file in next step

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>HMS</h2>
        <a href="#">Dashboard</a>
        <a href="#">Patients</a>
        <a href="#">Appointments</a>
        <a href="#">Doctors</a>
        <a href="#">Billing</a>
        <a href="#">Reports</a>
        <a href="#">Logout</a>
      </div>

      <div className="main">
        <div className="header">
          Welcome to ABC Hospital Management System
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>120</h2>
            <p>Total Patients</p>
          </div>
          <div className="stat-card">
            <h2>35</h2>
            <p>Available Beds</p>
          </div>
          <div className="stat-card">
            <h2>18</h2>
            <p>Appointments Today</p>
          </div>
          <div className="stat-card">
            <h2>12</h2>
            <p>Doctors on Duty</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Patients</h3>
            <p>Manage patient information, admissions, and history.</p>
          </div>
          <div className="card">
            <h3>Appointments</h3>
            <p>View and schedule appointments with doctors.</p>
          </div>
          <div className="card">
            <h3>Doctors</h3>
            <p>List and manage doctor profiles and schedules.</p>
          </div>
          <div className="card">
            <h3>Billing</h3>
            <p>Generate and track billing and payments.</p>
          </div>
          <div className="card">
            <h3>Reports</h3>
            <p>View hospital reports, analytics and performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

