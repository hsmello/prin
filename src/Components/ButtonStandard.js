import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: props => (props.bgcolor),
            fontWeight: 'bold'
        },
        
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Button
                // variant="contained"
                variant={props.variant}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.label}
            </Button>
        </div>
    );
}