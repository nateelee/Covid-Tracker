import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css'
import CountUp from 'react-countup';
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
   if (!confirmed) {
        return 'Loading...';
   }
    
    return (
        <div class = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">{confirmed.value}</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography variant = "body2">NUMBER OF ACTIVE CASES OF COVID</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5">recovered</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography variant = "body2">NUMBER OF RECOVERIES OF COVID</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant = "h5">REAL DATA</Typography>
                        <Typography color = "textSecondary">REAL DATE</Typography>
                        <Typography variant = "body2">NUMBER OF DEATHS BY COVID</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;