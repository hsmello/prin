import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
            width: props => props.width
        },
    },
}));

export default function BasicTextFields({children, ...props}) {
    const classes = useStyles(props);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                // id="outlined-basic"
                label={props.label}
                type={props.type}
                value={props.value}
                inputProps={{
                    maxLength: props.maxLength
                }}
                disabled={props.disabled}
                // variant="outlined"
                // variant={props.variant} 
                onChange={(e) => { props.onChange(e.target.value) }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' && props.OnClickEnter) {
                        event.preventDefault();
                        props.OnClickEnter(event)
                    }
                }}

            />
        </form>
    );
}