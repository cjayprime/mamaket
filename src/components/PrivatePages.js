import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Paper } from '@material-ui/core';
import { AccountCircle, Star } from '@material-ui/icons';

import { Layout, Input } from '.';

const PrivatePages = props => {
    const { tabs, tab } = props;
    const [currentTab, setCurrentTab] = useState(tab);
    const View = tabs[currentTab].component;
    return (
        <Layout background="#EBECED">
            <Grid container spacing={10} justify="space-evenly" style={{width: '90%', marginLeft: '5%', marginBottom: 150, marginTop: 100}}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="center" style={{display: 'flex', padding: 0, backgroundColor: '#FFF', overflow: 'hidden', height: 'auto', fontFamily: 'Quicksand', color: '#0177B6'}}>
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
                    <Grid item style={{margin: 10}}>
                        <Star style={{height: 40, width: 40, color: '#FFD700'}} />
                        <Star style={{height: 40, width: 40, color: '#FFD700'}} />
                        <Star style={{height: 40, width: 40, color: '#FFD700'}} />
                        <Star style={{height: 40, width: 40, color: '#FFD700'}} />
                        <Star style={{height: 40, width: 40, color: '#FFD700'}} />
                    </Grid>
                    <div style={{width: '100%', fontSize: 15, lineHeight: '20px', fontFamily: 'Quicksand', background: '#0177B6', color: '#FFFFFF', marginTop: 5, textAlign: 'center', height: 125, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span><span style={{color: '#FFB000', flex: 0}}>Alerts:</span> <span style={{opacity: 0.7}}>Verify your email address</span> johndoe@gmail.com</span>
                    </div>
                    {
                        tabs
                        .map((tab, i) => {
                            const style = {width: '90%', fontSize: 13, borderRadius: 0, padding: 15, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#3492C5', textDecoration: 'none'};
                            const Child = () => (
                                        <>
                                            <tab.icon />
                                            <span style={{marginLeft: 10, letterSpacing: '0.5px'}}>{tab.title}</span>
                                        </>
                            );
                            return (tab.link ? (
                                    <Link to={tab.link} key={tab.title} style={style}>
                                        <Child />
                                    </Link>
                                ) : (
                                    <div onClick={() => setCurrentTab(i)} key={tab.title} style={style}>
                                        <Child />
                                    </div>
                                ));
                        })
                    }
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{display: 'flex', paddingTop: 0}}>
                    <Paper style={{paddingTop: 0, fontFamily: 'Quicksand', fontSize: 20, minHeight: 500, width: '100%', color: '#3492C5'}}>
                        <div style={{borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%'}}>
                            {tabs[currentTab].title}
                        </div>
                        {View && <View />}
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default PrivatePages;
