import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

export default function SideDrawer(props) {

    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <h2 className="menu_title">MENU</h2>
            <ul>
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/login" >Login</Link></li>
            </ul>
        </nav>
    );
};