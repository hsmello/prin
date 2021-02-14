import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


function DrawerButton(props) {
    return (
        <IconButton
            onClick={props.onClick}
        >

            <MenuIcon
                fontSize="default"
            />
        </IconButton>
    );
};

export default DrawerButton;