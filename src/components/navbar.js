import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className = "navbar-brand">Daily Forty-Niner</Link>
                <div className="collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "navbar-item">
                            <Link to = "/" className = "nav-link">Timeline</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/create" className = "nav-link">Create Event</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/staff" className = "nav-link">Create Staff</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}