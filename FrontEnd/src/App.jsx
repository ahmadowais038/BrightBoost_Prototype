import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashboard from './pages/StudentDashboard';
import Admin from './pages/AdminDashboard';
// import LogReg from "./compenents/LogReg"
import Login from "./pages/Reg";
import Home from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import Tutor from "./pages/TutorDashboard"
import AdminLogin from './pages/AdminLogin';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path = "/tutordashboard" element = {<Tutor/>} />
      <Route path = "/Admin" element = {<AdminLogin/>} />
      <Route path = "/StudentDashboard" element = {<StudentDashboard/>} />



    </Routes>



  );
}

export default App;