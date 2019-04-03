import React, { Component } from 'react';
import {Link } from 'react-router-dom'
//import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
     
 <div className="sidebar-panel">
            <ul id="slide-out" className="collapsible side-nav">
                <li className="list-top">
                    <Link to="/"><i className="fas fa-home"></i>Home</Link>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fas fa-building"></i>Properties<span><i className="fas fa-angle-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/properties-details">Properties Details</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fas fa-user"></i>Agent<span><i className="fas fa-angle-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><Link to="/agent">Agent</Link></li>
                            <li><Link to="/agent-details">Agent Details</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fas fa-rss"></i>Blog<span><i className="fas fa-angle-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/blog-single">Blog Single</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fas fa-user"></i>Account<span><i className="fas fa-angle-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/forgot-password">Forgot Password</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fas fa-clone"></i>Pages<span><i className="fas fa-angle-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/coming-soon">Coming Soon</Link></li>
                            <li><Link to="/page-not-found">Page Not Found</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/testimonial">Testimonial</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/coming-soon"><i className="fas fa-clock"></i>Coming Soon</Link></li>
                <li><Link to="/faq"><i className="fas fa-question"></i>Faq</Link></li>
                <li><Link to="/contact"><i className="fas fa-envelope"></i>Contact</Link></li>
                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
                <li><Link to="/register"><i className="fas fa-user-plus"></i>Register</Link></li>
                <li className="bg-specific"><Link to="/submit-properties"><i className="fas fa-folder-plus"></i>Submit Properties</Link></li>
                <li><Link to="/index"><i className="fas fa-sign-out-alt"></i>Log Out</Link></li>
            </ul>
        </div>
     
      );
    }
  }
  
export default Sidebar;
