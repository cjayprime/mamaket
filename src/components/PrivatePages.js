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
            <Grid container spacing={10} justify="space-evenly" style={{ marginBottom: 150, marginLeft: '5%', marginTop: 100, width: '90%' }}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="center" style={{ backgroundColor: '#FFF', color: '#0177B6', display: 'flex', fontFamily: 'Quicksand', height: 0, padding: 0 }}>
                    <Paper style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        <IconButton
                            color="inherit"
                        >
                            <AccountCircle style={{ color: '#0177B6', height: 150, width: 150 }} />
                        </IconButton>
                        <div style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 25, fontWeight: 'bold' }}>
                            John Doe
                        </div>
                        <div style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 18 }}>
                            +2348197222327
                        </div>
                        <Grid item style={{ margin: 10 }}>
                            <Star style={{ color: '#FFD700', height: 40, width: 40 }} />
                            <Star style={{ color: '#FFD700', height: 40, width: 40 }} />
                            <Star style={{ color: '#FFD700', height: 40, width: 40 }} />
                            <Star style={{ color: '#FFD700', height: 40, width: 40 }} />
                            <Star style={{ color: '#FFD700', height: 40, width: 40 }} />
                        </Grid>
                        <div style={{ background: '#0177B6', color: '#FFFFFF', display: 'flex', fontFamily: 'Quicksand', alignItems: 'center', fontSize: 15, height: 125, justifyContent: 'center', lineHeight: '20px', width: '100%', marginTop: 5, textAlign: 'center' }}>
                            <span><span style={{ color: '#FFB000', flex: 0 }}>Alerts:</span> <span style={{ opacity: 0.7 }}>Verify your email address</span> johndoe@gmail.com</span>
                        </div>
                        {
                            tabs
                                .map((tab, i) => {
                                    if(!tab.icon || !tab.title) return null;

                                    const style = { alignItems: 'center', borderBottom: '1px solid #eee', borderRadius: 0, boxShadow: '0 0 0 0', color: '#3492C5', cursor: 'pointer', display: 'flex', fontSize: 13, fontWeight: 'bold', width: '90%', padding: 15, textDecoration: 'none' };
                                    const Child = () => (
                                        <>
                                            <tab.icon />
                                            <span style={{ letterSpacing: '0.5px', marginLeft: 10 }}>{tab.title}</span>
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
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{ display: 'flex', paddingTop: 0 }}>
                    <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, minHeight: 500, paddingTop: 0, width: '100%' }}>
                        {
                            tabs[currentTab].title &&
                            <>
                                <div style={{ borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%' }}>
                                    {tabs[currentTab].title}
                                </div>
                            </>
                        }
                        {View && <View />}
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default PrivatePages;
