import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, IconButton, Button, useMediaQuery, FormControlLabel, Checkbox } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { Layout, Input } from '../components';

const Signup = () => {
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    const data = useState({
        firstname: ''
    });
    const change = useCallback((value, name, error) => {

    });
    const submit = useCallback(() => {

    });
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
                        Register
                    </Grid>

                    <Input type="text" placeholder="First Name" width={matchesXS ? '80%' : '50%'} value={} onChange={change} />

                    <Input type="text" placeholder="Last Name" width={matchesXS ? '80%' : '50%'} />

                    <Input type="text" placeholder="Phone Number" width={matchesXS ? '80%' : '50%'} />

                    <Input type="email" placeholder="Email Address" width={matchesXS ? '80%' : '50%'} />

                    <Input type="text" placeholder="Password" width={matchesXS ? '80%' : '50%'} />

                    <div style={{ width: matchesXS ? '80%' : '50%' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={true}
                                    // onChange={()}
                                    name="checkedB"
                                    color="primary"
                                    style={{ color: '#3492C5' }}
                                />
                            }
                            label={<span style={{ color: '#3492C5', fontFamily: 'Quicksand' }}>I agree with the rules</span>}
                        />
                    </div>
                
                    <Button onClick={submit} variant="contained" color="primary" style={{ backgroundColor: '#3492C5', borderRadius: 40, fontSize: 15, fontWeight: 'normal', margin: 50, textTransform: 'none', width: '40%' }}>
                        Register
                    </Button>
                </Paper>
            </Box>
        </Layout>
    );
};

Signup.AccountStatus = props => {
    const { label, link } = props;
    return (
        <div style={{ color: '#ADADAD', fontSize: 15, margin: 20, textAlign: 'center' }}>
            {label}{" "}
            <Link to={link.url} style={{ color: '#0177B6', fontWeight: 'bold', textDecoration: 'none' }}>{link.label}</Link>
        </div>
    );
};

export default Signup;
