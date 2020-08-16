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
            <Box style={{ fontFamily: 'Quicksand', marginBottom: 100, marginLeft: matchesXS ? 0 : matchesMD ? '25%' : '10%', marginTop: 100, width: matchesXS ? '100%' : matchesMD ? '50%' : '80%' }}>
                <Paper style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: 'auto', justifyContent: 'flex-start', width: '100%' }}>
                    <Grid container item xs={12} justify="center" alignItems="center" style={{ backgroundColor: '#3492C5', color: '#FFFFFF', fontSize: 20, height: 70, padding: 10 }}>
                        <IconButton
                        // onClick={handleMenu}
                            color="inherit"
                            style={{ fontSize: 25 }}
                        >
                            <AccountCircle />
                        </IconButton>
                        Sign In
                    </Grid>

                    <Input placeholder="Email or Phone Number" width={matchesXS ? '80%' : '50%'} />

                    <Input placeholder="Password" width={matchesXS ? '80%' : '50%'} />

                    <Signin.AccountStatus label="Forgot Password?" link={{ label: "Click here", url: "/forgot" }} />
                
                    <Button variant="contained" color="primary" style={{ backgroundColor: '#3492C5', borderRadius: 40, fontSize: 15, fontWeight: 'normal', marginBottom: 50, textTransform: 'none', width: '40%' }}>
                        Sign In
                    </Button>
                </Paper>
            
                <Signin.AccountStatus label="Don't have an account?" link={{ label: "Register here", url: "/signup" }} />
            </Box>
        </Layout>
    );
};

Signin.AccountStatus = props => {
    const { label, link } = props;
    return (
        <div style={{ color: '#ADADAD', fontSize: 15, margin: 20, textAlign: 'center' }}>
            {label}{" "}
            <Link to={link.url} style={{ color: '#0177B6', fontWeight: 'bold', textDecoration: 'none' }}>{link.label}</Link>
        </div>
    );
};

export default Signin;
