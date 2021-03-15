import React from 'react';
import "./Header.scss"
import {
    Link
} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Interval Timer</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;