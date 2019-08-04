// Main 
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import './App.css';

/// COMPONENTS ///
import Navbar from "./components/navbar";
import EventsList from "./components/event-list";
import EditEvent from "./components/edit-event";
import CreateEvent from "./components/create-event";
import CreateStaff from "./components/create-staff";


function App() {
  return (
    <Router>
      <div className = "container">
      <Navbar />
        <br/>
        <Route path="/" exact component = {EventsList} />
        <Route path="/edit/:id" exact component = {EditEvent} />
        <Route path="/create" component = {CreateEvent} />
        <Route path="/staff" component = {CreateStaff} />
      </div>
    </Router>
   
  );
}

export default App;
