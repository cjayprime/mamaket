import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Paper } from '@material-ui/core';
import { AccountCircle, Star, Image, Mail } from '@material-ui/icons';

import { Layout, Input } from '../../components';

import prod from './prod.png';

const PrivatePages = () => {
    const tab = 0;
    const tabs = [
        { icon: Image, link: '/profile', title: 'My adverts' },
        { icon: Mail, link: '/messages', title: 'Messages' },
        // {title: 'Settings', component: null, icon: Settings},
    ];
    const [currentTab, setCurrentTab] = useState(tab);
    return (
        <>
            {/*  <Layout background="#EBECED">
            <Grid container spacing={10} justify="space-evenly" style={{width: '90%', height: 'auto', marginLeft: '5%', marginBottom: 150, marginTop: 100}}> */}
            {/* <Grid item xs={12} sm={12} md={3} direction="column" alignItems="center" style={{padding: 0, backgroundColor: '#FFF', height: 10, fontFamily: 'Quicksand', color: '#0177B6'}}>
                    <Paper style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                    </Paper>
                </Grid> */}
            {/* <Grid container item xs={12} sm={12} md={9} style={{display: 'flex', paddingTop: 0}}> */}
            <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, minHeight: 500, paddingTop: 0, width: '100%' }}>
                <div style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'auto', overflow: 'hidden' }}>
                    <img src={prod} style={{ height: 'auto', width: '100%' }} />
                </div>
                {/* <div style={{borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%'}}>
                            {tabs[currentTab].title}
                        </div>
                        {View && <View />} */}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5, paddingLeft: 10 }}>
                    {
                        [1,2,3,4,5,7,5,3,3]
                            .map(() => (
                                <div style={{ backgroundImage: `url('${prod}')`, backgroundPosition: 'center', backgroundSize: 'cover', border: '1px solid #3492C5', height: 150, margin: 3, width: 150 }}>
                                    {/* <img src={prod} style={{width: '100%', height: 'auto'}} /> */}
                                </div>
                            ))
                    }
                </div>

                <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 25 }}>
                    Spicy Jolly Rice with Side meals and Veggies
                </div>

                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                    Posted 6 hours ago
                </div>

                <div style={{ backgroundColor: '#EAF4F9', height: 1, marginLeft: 10, marginTop: 30, width: 'calc(100% - 20px)' }} />

                <div style={{ color: '#0177B6', fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 25 }}>
                    Description
                </div>

                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginBottom: 50, marginLeft: 10, marginTop: 20 }}>
                    Place your order for a plate of our delicious spicy rice with options for side meals like plantain, beans, salad, vegetables, and protein like chicken, beef, or fish. we deliver to your location….
                </div>
            </Paper>

            <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginTop: 25 }}>
                Sponsored Products
            </div>

            <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, marginTop: 15, minHeight: 500, width: '100%' }}>
                {
                    [1,1,1,1,1]
                        .map(() => (
                            <Grid container style={{ borderBottom: '1px solid #D6E9F3', height: 250, padding: 0 }} justify="space-around">
                                <Grid item xs={3} style={{ backgroundColor: 'red' }}>
                                    <div style={{ backgroundImage: `url('${prod}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%', width: 'auto' }} />
                                </Grid>
                                <Grid item xs={7} style={{ paddingLeft: 15 }}>
                                    <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>
                                        Spicy Jolly Rice with Side meals and Veggies
                                    </div>
                                    <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginBottom: 50, marginLeft: 10, marginTop: 20 }}>
                                        Place your order for a plate of our delicious spicy rice with options for side meals like plantain, beans, salad, vegetables, and protein like chicken, beef, or fish. we deliver to your location….
                                    </div>

                                    <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                                        Lekki, Lagos
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>
                                        N 3000
                                    </div>
                                </Grid>
                            </Grid>
                        ))
                }
            </Paper>
            {/* </Grid> */}
            {/* </Grid> */}
            {/* </Layout> */}
        </>
    );
};

export default PrivatePages;
