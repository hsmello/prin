import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        heigh: 20
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                // title="Product Type"
                subheader="Product Type"
            />
            <CardMedia
                className={classes.media}
                image='./../Images/home-cover.jpg' //show the media
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Product Name
                </Typography>
            </CardContent>
            
        </Card>
    );
}
