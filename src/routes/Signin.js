import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, IconButton, Button, useMediaQuery } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { Layout, Input } from '../components';

const Signin = () => {
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
  const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
  return (
    <Layout background="#EBECED">
        <Box style={{width: matchesXS ? '100%' : matchesMD ? '50%' : '80%', marginLeft: matchesXS ? 0 : matchesMD ? '25%' : '10%', marginTop: 100, marginBottom: 100, fontFamily: 'Quicksand'}}>
            <Paper style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Grid container item xs={12} justify="center" alignItems="center" style={{backgroundColor: '#3492C5', height: 70, padding: 10, color: '#FFFFFF', fontSize: 20}}>
                    <IconButton
                        // onClick={handleMenu}
                        color="inherit"
                        style={{fontSize: 25}}
                    >
                        <AccountCircle />
                    </IconButton>
                    Sign In
                </Grid>

                <Input placeholder="Email or Phone Number" width={matchesXS ? '80%' : '50%'} />

                <Input placeholder="Password" width={matchesXS ? '80%' : '50%'} />

                <Signin.AccountStatus label="Forgot Password?" link={{url: "/forgot", label: "Click here"}} />
                
                <Button variant="contained" color="primary" style={{textTransform: 'none', fontSize: 15, fontWeight: 'normal', backgroundColor: '#3492C5', borderRadius: 40, width: '40%', marginBottom: 50}}>
                    Sign In
                </Button>
            </Paper>
            
            <Signin.AccountStatus label="Don't have an account?" link={{url: "/signup", label: "Register here"}} />
        </Box>
    </Layout>
  );
};

Signin.AccountStatus = props => {
    const { label, link } = props;
    return (
        <div style={{margin: 20, textAlign: 'center', color: '#ADADAD', fontSize: 15}}>
            {label}{" "}
            <Link to={link.url} style={{color: '#0177B6', textDecoration: 'none', fontWeight: 'bold'}}>{link.label}</Link>
        </div>
    );
};

export default Signin;