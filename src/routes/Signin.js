import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, IconButton, useMediaQuery } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { Layout, Input, Button } from '../components';

import Styles from '../assets/styles';

import Store from '../store';


const Signin = props => {
    const { history } = props;
    const loading = Store.account.requests.some((endpoint) => endpoint === '/auth/login');
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    const width = matchesXS ? '80%' : '50%';
    const init = {
        email: '',
        password: '',
    };
    const [errors, setErrors] = useState(init);
    const [data, setData] = useState(init);
    const {
        email,
        password,
    } = data;
    const container = { fontFamily: 'Quicksand', marginBottom: 100, marginLeft: matchesXS ? 0 : matchesMD ? '25%' : '10%', marginTop: 100, width: matchesXS ? '100%' : matchesMD ? '50%' : '80%' };
    const change = (value, name, error) => {
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: error });
    };
    const submit = () => {
        Store.account.validate.request(Store.account.signin, {
            email,
            password,
        }, errors, () => history.push('/profile'));
    };
    return (
        <Layout background='#EBECED'>
            <Box style={container}>
                <Paper style={Styles.auth.paper}>
                    <Grid container item xs={12} justify='center' alignItems='center' style={Styles.auth.header}>
                        <IconButton
                            color='inherit'
                            style={Styles.auth.icon}
                        >
                            <AccountCircle />
                        </IconButton>
                        Sign In
                    </Grid>
                    <Input type='email' placeholder='Email' name='email' width={width} value={data.email} onChange={change} />

                    <Input type='password' placeholder='Password' name='password' width={width} value={data.password} onChange={change} />

                    <Signin.AccountStatus label='Forgot Password?' link={{ label: 'Click here', url: '/forgot' }} />
                    
                    <Button
                        loading={loading}
                        onClick={submit}
                        variant='contained'
                        color='primary'
                        style={Styles.auth.button}
                    >
                        Sign In
                    </Button>

                </Paper>
            
                <Signin.AccountStatus label="Don't have an account?" link={{ label: 'Register here', url: '/signup' }} />
            </Box>
        </Layout>
    );
};

Signin.AccountStatus = props => {
    const { label, link } = props;
    return (
        <div style={{ color: '#ADADAD', fontSize: 15, margin: 20, textAlign: 'center' }}>
            {label}{' '}
            <Link to={link.url} style={{ color: '#0177B6', fontWeight: 'bold', textDecoration: 'none' }}>{link.label}</Link>
        </div>
    );
};

export default Signin;
