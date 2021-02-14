import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion'; // was called ExpensionPanel
import AccordionDetails from '@material-ui/core/AccordionDetails'; // was called ExpensionPanelDetails
import AccordionSummary from '@material-ui/core/AccordionSummary'; // was called ExpensionPanelSummary
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: 'solid',
        borderWidth: '1px',
        borderColor: 'rgb(85,53,92)',
    },
    fullHeading: {
        borderBottom: 'solid',
        borderBottomWidth: '0.3px',
        borderBottomColor: 'rgb(85,53,92)',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        flexBasis: '23.33%',
        flexShrink: 0,
        
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.text.secondary,
    },
    answer: {
        fontSize: theme.typography.pxToRem(15),
        marginLeft: '50px'
    }
}));

export default function MyPanel(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    className={classes.fullHeading}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                    <Typography className={classes.secondaryHeading}>{props.subtitle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.answer} >
                        {props.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}