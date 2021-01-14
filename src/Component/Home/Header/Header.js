import React from 'react';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
// drawer
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import image4 from '../../image/sneaker.jpg';
// link pages
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // drawer
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  // And to use history we need to import it from react-router-dom 
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handlePath =(path) => history.push(path)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
     <div>
        {/* <Typography className={classes.title} noWrap>
          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '60px'}} > SNKERS </Link>  
          </Typography> */}
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      
      {/* dashboard & profile */}
      <MenuItem onClick={handleMenuClose}><Link style={{textDecoration:'none', color:'black', fontSize: '15px'}} to='/dashboard'>Dashboard</Link></MenuItem>
      <MenuItem><Link style={{textDecoration:'none', color:'black', fontSize: '15px'}} to='/signIn'>Sign In</Link></MenuItem>
    </Menu>
    </div>
  );

  // carousle https://www.npmjs.com/package/react-responsive-carousel
//   const renderCarousel = (
//     <Carousel infiniteLoop autoPlay>
//     <div className={"carousel-image"}>
//         <image src={'https://i.pinimage.com/474x/79/88/fb/7988fb9e297a63ab3b60a2f41e6bd0f3.jpg'} />
//     </div>
//     <div className={"carousel-image"}>
//         <image src={'https://i.pinimage.com/474x/31/70/5f/31705f3440ca23699ae7dd60af491abe.jpg'} />
//     </div>
//     <div className={"carousel-image"}>
//         <image src={'https://i.pinimage.com/474x/ef/41/dc/ef41dc14e52a80bcfadaeda3ae24b641.jpg'} />
//     </div>
// </Carousel>
//     )

  // carousel mobile
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label=" " color="inherit">
          <Badge badgeContent={1} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label=" " color="inherit">
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#232526'}}>
        <Toolbar>
   
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"> */}
          {/* <Link to ='/menu'>  <MenuIcon /></Link> */}
          
          {/* drawer */}
          {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{ <MenuIcon style={{color:'white'}}/>}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
          ))}

          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '45px',paddingLeft:"30px"}} > SNKERS </Link>  
         
          {/* </IconButton> */}
          {/* <Typography className={classes.title} noWrap>
          <Link to='/'style={{textDecoration:'none', color:'white', fontSize: '60px'}} > SNKERS </Link>  
          </Typography> */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}  >
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/white')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/white'>White</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/tech')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/tech'>Tech</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/vintage')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/vintage'>Vintage</Link>
            </IconButton>
            <IconButton aria-label=" " color="inherit" onClick={()=> handlePath('/color')}>
            <Link style={{textDecoration:'none', color:'white', fontSize: '12px'}} to='/color'>Color</Link>
            </IconButton>

            
            <IconButton aria-label="search" color="inherit">
            <SearchIcon />
            </IconButton>
            
            {/* <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
            </IconButton> */}

            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }} />
           </div>  */}


            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>


            <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit" >
              <MoreIcon />
            </IconButton>
            </div>


        </Toolbar>
      </AppBar>
      
      {/* {renderCarousel} */}
      {/* {renderMobileMenu}  */}

      {renderMenu} 
    </div>
  );
}
