import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import snLogo from '../../../image/snlogo.png'
import c1 from '../../../image/color/c1.jpg'
import c2 from '../../../image/color/c2.jpg'
import c3 from '../../../image/color/c3.jpg'
import c4 from '../../../image/color/c4.jpg'

import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
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
  heartColor: {
    color: "red"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const handleFavorite = () => {
    setColor(!color)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div> 
      <Header/>
  
    <Card >
    <div style={{ paddingLeft: "100px", paddingTop: "20px" }}><h5 >COLOR</h5></div>

<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={snLogo}>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c1}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount 
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color:  color ? "red" : ""}} onClick={handleFavorite} />
        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={snLogo}>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c2}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon style={{ color:  color ? "red" : ""}} onClick={handleFavorite} />

        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>
<div class="container">
  <div class="row">
    <div class="col">

      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={snLogo}>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c3}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon style={{ color:  color ? "red" : ""}} onClick={handleFavorite} />

        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>
    </div>
    <div class="col">
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={snLogo}>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="NIKE"
        subheader="Style SN 0003" />

      <CardMedia
        className={classes.media}
        image={c4}
        title="NIKE" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "red" }}>
          $ 189.00  Discount -30%
    </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/cDetails'>Details</Link>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon style={{ color:  color ? "red" : ""}} onClick={handleFavorite} />

        </IconButton>

        {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }} paragraph>Shoe Care: use magic erasers</Typography>
          <Typography paragraph>

          </Typography>
        </CardContent>
      </Collapse>

    </div>
  </div>
  
</div>
       
    </Card>
    <Footer/></div>
  );
}
 







// import React from 'react';
// function ColorMagic() {
//   return(
//     <div>
//       ColorMagic
//     </div>
//   )
// }
// export default ColorMagic;



// import React from 'react';
// const Contact = () => {
//   return <div>
//       Contact
//     </div>;
// };
// export default Contact;