import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, IconButton, Button, useMediaQuery, FormControlLabel, Checkbox } from '@material-ui/core';
import { AccountCircle, Image, Notifications, Feedback, People, Settings, PhotoLibrary } from '@material-ui/icons';

import { Layout, Input } from '../../components';

const Template = props => {
    const { title } = props;
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    return (
        <Layout background="#EBECED">
            <Grid container spacing={10} justify="space-evenly" style={{width: '90%', marginLeft: '5%', marginBottom: 150, marginTop: 100}}>
                <Grid item xs={12} sm={12} md={3} direction="column" alignItems="center" style={{display: 'flex', padding: 0, backgroundColor: '#FFF', overflow: 'hidden', fontFamily: 'Quicksand', color: '#0177B6'}}>
                    <IconButton
                        color="inherit"
                    >
                        <AccountCircle style={{height: 150, width: 150, color: '#0177B6'}} />
                    </IconButton>
                    <div style={{fontSize: 25, fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3492C5'}}>
                        John Doe
                    </div>
                    <div style={{fontSize: 18, fontFamily: 'Quicksand', color: '#3492C5'}}>
                        +2348197222327
                    </div>
                    <div style={{width: '100%', fontSize: 15, lineHeight: '20px', fontFamily: 'Quicksand', background: '#0177B6', color: '#FFFFFF', marginTop: 30, textAlign: 'center', height: 125, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span><span style={{color: '#FFB000', flex: 0}}>Alerts:</span> <span style={{opacity: 0.7}}>Verify your email address</span> johndoe@gmail.com</span>
                    </div>
                    {
                        [
                            {label: 'My Adverts', component: Image, link: 'advertisement'},
                            {label: 'Notifications', component: Notifications, link: 'notifications'},
                            {label: 'Feedbacks', component: Feedback, link: 'feedback'},
                            {label: 'Followers', component: People, link: 'followers'},
                            {label: 'Settings', component: Settings, link: 'settings'},
                        ].map(prop => (
                            <Link to={"/profile/" + prop.link} key={prop.label} style={{width: '90%', fontSize: 13, borderRadius: 0, padding: 15, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#3492C5', textDecoration: 'none'}}>
                                <prop.component />
                                <span style={{marginLeft: 10, letterSpacing: '0.5px'}}>{prop.label}</span>
                            </Link>
                        ))
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={9} style={{display: 'flex', paddingTop: 0}}>
                    <Paper style={{paddingTop: 0, fontFamily: 'Quicksand', fontSize: 20, minHeight: 500, width: '100%', color: '#3492C5'}}>
                        <div style={{borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%'}}>
                            {title}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                            <PhotoLibrary style={{height: 250, width: 250}} />
                            <div style={{fontSize: 15, textAlign: 'center'}}>There are no new adverts to display.<br/> Create a new advert now</div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Template;
