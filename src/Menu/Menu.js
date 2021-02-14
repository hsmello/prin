import React, { useState } from 'react';
import Backdrop from './Backdrop/Backdrop';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

export default function Menu() {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    function handleDrawerClick() {
        setSideDrawerOpen(true)
    }

    function handleBackdropClick() {
        setSideDrawerOpen(false)
    }
    
    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop click={handleBackdropClick} />;
    }
    return (
        <div className="">
            <Toolbar
                onClick={handleDrawerClick}
            />

            <SideDrawer show={sideDrawerOpen} />
            {backdrop}
        </div>
    )
}