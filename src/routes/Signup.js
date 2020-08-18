import React, { useState } from 'react';
import { Paper, Grid, Box, IconButton, useMediaQuery, FormControlLabel, Checkbox } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { Layout, Input, Button } from '../components';

import Styles from '../assets/styles';

import Store from '../store';

const Signup = props => {
    const { history } = props;
    const loading = Store.account.requests.some((endpoint) => endpoint === '/auth/signup');
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    const width = matchesXS ? '80%' : '50%';
    const init = {
        email: '',
        firstname: '',
        lastname: '',
        mobile: '',
        password: '',
    };
    const [agreement, setAgreement] = useState(false);
    const [errors, setErrors] = useState(init);
    const [data, setData] = useState(init);
    const {
        firstname,
        lastname,
        mobile,
        email,
        password,
    } = data;
    const change = (value, name, error) => {
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: error });
    };
    const submit = () => {
        Store.account.validate.request(Store.account.signup, {
            email,
            name: `${firstname} ${lastname}`,
            password,
            phoneNumber: mobile,
            role: 'buyer',
        }, errors, () => history.push('/signin'));
    };
    const container = { fontFamily: 'Quicksand', marginBottom: 100, marginLeft: matchesXS ? 0 : matchesMD ? '25%' : '10%', marginTop: 100, width: matchesXS ? '100%' : matchesMD ? '50%' : '80%' };
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
                        Register
                    </Grid>

                    <Input type='text' placeholder='First Name' name='firstname' width={width} value={firstname} onChange={change} />

                    <Input type='text' placeholder='Last Name' name='lastname' width={width} value={lastname} onChange={change} />

                    <Input type='mobile' placeholder='Phone Number' name='mobile' width={width} value={mobile} onChange={change} />

                    <Input type='email' placeholder='Email Address' name='email' width={width} value={email} onChange={change} />

                    <Input type='password' placeholder='Password' name='password' width={width} value={password} onChange={change} />

                    <div style={{ width }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agreement}
                                    onChange={() => setAgreement(!agreement)}
                                    color='primary'
                                    style={{ color: '#3492C5' }}
                                />
                            }
                            label={<span style={Styles.auth.terms}>I agree with the rules</span>}
                        />
                    </div>
                    
                    <Button
                        disabled={!agreement}
                        loading={loading}
                        onClick={agreement ? submit : null}
                        variant='contained'
                        color='primary'
                        style={Object.assign(JSON.parse(JSON.stringify(Styles.auth.button)), {opacity: agreement ? 1 : 0.5})}
                    >
                        Register
                    </Button>
                </Paper>
            </Box>
        </Layout>
    );
};

export default Signup;
