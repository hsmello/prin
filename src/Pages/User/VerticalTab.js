import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>{children}</Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        flexDirection: 'unset',
        justifyContent: 'unset'
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                // onChange={(event, newValue) => props.onChange(event, newValue)}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label={props.labelOne} {...a11yProps(0)} />
                <Tab label={props.labelTwo} {...a11yProps(1)} />
                <Tab label={props.labelThree} {...a11yProps(2)} />
                <Tab label={props.labelFour} {...a11yProps(3)} />
                <Tab label={props.labelFive} {...a11yProps(4)} />
                <Tab label={props.labelSix} {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {props.componentOne}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.componentTwo}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.componentThree}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {props.componentFour}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {props.componentFive}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {props.componentSix}
            </TabPanel>
        </div>
    );
}
