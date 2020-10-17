import React from 'react';
import {Link} from 'react-router-dom';
import headerlogo from './headerlogo.png';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return(
            <div className="header-container flex-container">
                    <img className="header-logo" src={headerlogo} />
                    <span><Link to='/'>Home</Link></span>
                    <span><Link to='/Library'>Library</Link></span>
                    <span><Link to='/About'>About</Link></span>
                    <span><Link to='/Contact'>Contact</Link></span>
            </div>
        );
    }
}

export default Nav;