import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, /*Switch, FormControlLabel, FormGroup,*/ Menu, MenuItem, Badge } from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon, Mail, Notifications } from '@material-ui/icons';

import logo from '../assets/images/logo/header.png';

import Store from '../store';


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    root: {
        background: '#0177B6',
        boxShadow: '0px 0px 2px 0px #000000',
        flexGrow: 1,
        height: 70,
        position: 'relative',
        zIndex:100000000,
        zIndex: 100
    },
    title: {
        flexGrow: 1,
        marginLeft: 50
    },
}));
const useMenuStyles = makeStyles(() => ({
    paper: {
        position: 'absolute',
        right: 50,
        marginTop: 30,
        width: 100,
        zIndex: 1000
    },
}));
const Header = () => {
    const classes = useStyles();
    const menuStyles = useMenuStyles();
    useEffect(() => {
        Store.chat.count();
    });
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to='/'><img src={logo} /></Link>
                </Typography>
                <div>
                    {
                        !Store.account.storage.get('TOKEN')
                        ?   <>
                                <Link to='/signin' style={{textDecoration: 'none', color: '#FFF'}}>
                                    <span style={{color: '#FFFFFF', fontSize: 14, cursor: 'pointer'}}>
                                            Sign in
                                    </span>
                                </Link>
                                <span style={{margin: 15}}>|</span>
                                <Link to='/signup' style={{textDecoration: 'none', color: '#FFF'}}>
                                    <span style={{backgroundColor: '#2DC7FF', padding: 10, borderRadius: 25, fontSize: 14, cursor: 'pointer'}}>
                                            Register
                                    </span>
                                </Link>
                            </>
                        :   <>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <Link to='/message' style={{textDecoration: 'none', color: '#FFF'}}>
                                    <Badge badgeContent={parseInt(Store.chat.total)} color="secondary">
                                        <Mail />
                                    </Badge>
                                    </Link>
                                </IconButton>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    classes={menuStyles}
                                >
                                    <MenuItem onClick={handleClose}><Link to='/profile' style={{textDecoration: 'none'}}>Profile</Link></MenuItem>
                                    <MenuItem onClick={handleClose} onClick={Store.account.signout}>Signout</MenuItem>
                                </Menu>
                            </>
                    }
                            
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default observer(Header);
