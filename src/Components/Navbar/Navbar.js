import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className='logo fw-bold'>Doc<span className='logo-span'>mic.</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className='Nav-button active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className='Nav-button'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/department' className='Nav-button'>Department</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pages' className='Nav-button'>Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className='Nav-button'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacts' className='Nav-button'>Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/consulation' className='common-button ms-lg-5'>Free Consulation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;