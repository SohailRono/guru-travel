import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';

const Navbar = () => {
    return (
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark fixed-top">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
                    <input className="form-control text-white mr-sm-2 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">News</Link>
                    </li>
                 <li className="nav-item">
                        <Link className="nav-link" to="#">Destinations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">About</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-warning" to="#">Login</button>
                    </li>
                </ul>
                
            </div>
        </nav>

    );
};

export default Navbar;