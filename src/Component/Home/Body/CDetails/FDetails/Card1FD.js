import React from 'react';
import '../Css/Style.css';
import CDetails from '../CDetails'

import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import StarRatings from 'react-star-ratings';

import Card1 from '../../../Body/CDetails/CDetailsAll/Card1'


import {
  withStyles,
  Radio,
  Checkbox,
  Fab, CircularProgress, Hidden, Link
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Card1FD() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      

       
      {/* WHITE CARDS 1 */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card1/>
           </div>
          <div class="col-sm">
            <Typography variant="h4" component="h4">
              CONVERSE
            </Typography><br />
            <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 189.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography> <br />
            <Typography>
              <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="black"/>
            </Typography><br />

            <Typography component="p">
            Originally designed and worn by badminton world-champ Jack Purcell, these sneakers have been an icon for low-key expression since 1935. Now they're available in all-over leather, with the signature "smile" at the toe.
             </Typography><br/><br/>

             <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>SIZE</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>QUANTITY</span></Fab>
            </div><br/>

            <div className="relative">
              <Fab color="primary" size="large" id="btnCart"
                style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
            </div><br/>
          </div>
          <img src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
        </div>
      </div>
  
<br/>
    </div>
  )
}
export default Card1FD;