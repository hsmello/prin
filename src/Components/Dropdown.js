import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: props => props.width
        // minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects(props) {
    const classes = useStyles(props);

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple"> {props.label} </InputLabel>
                <Select
                    native
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    {props.options}
                </Select>
            </FormControl>
        </div>
    );
}
