import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabel(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.checked}
                        onChange={(e) => props.onChange(e)}
                        name={props.name}
                        color="primary"
                    />
                }
                label={props.label}
            />
        </FormGroup>
    );
}
