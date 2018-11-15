import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" href="#">Studio Ghibli</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/' className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                    <Link to='/films' className="nav-item nav-link">Films</Link>
                    <Link to='/people' className="nav-item nav-link">People</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;