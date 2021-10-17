import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Nav.css'

function Nav() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__left">
                    <Link to="/" className="logo flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="camera__logo h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"   >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>Market
                        <span style={{color: "orange", fontSize: "24px"}}>.</span>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="tracking-wide block uppercase font-bold text-xs active">Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/progress" className="tracking-wide block uppercase font-bold text-xs">Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/photographers " className="tracking-wide block uppercase font-bold text-xs">Photographers</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar__right">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/notification">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>

        </header>

    )
}

export default Nav
