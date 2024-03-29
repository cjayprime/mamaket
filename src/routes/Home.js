import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, InputBase, IconButton, GridList, GridListTile, GridListTileBar, useMediaQuery, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronRight, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { Layout, ProductCatalogue } from '../components';

import Store from '../store';

import ladyInYellow from '../assets/images/home/ladyInYellow.png';
import guyOnYellowBackground from '../assets/images/home/guyOnYellowBackground.png';
import twoGuysOnWhiteBackground from '../assets/images/home/twoGuysOnWhiteBackground.png';


const usePaperStyles = makeStyles(() => ({
    root: {
        background: '#0177B6',
        borderRadius: 0,
        boxShadow: '0 0 0 0',
        flexGrow: 1,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
    },
}));
const useInputStyles = makeStyles(() => ({
    root: {
        alignItems: 'content',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        fontSize: 15,
        height: 50,
        justify: 'content',
        marginLeft: 0,
        padding: 20,
        paddingLeft: 5,
    },
}));
const ladyInYellowStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    top: -30,
    zIndex: 5000,
};
const Home = () => {
    const [query, setQuery] = useState('');
    const history = useHistory('');
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    const paperClasses = usePaperStyles();
    const inputClasses = useInputStyles();
    useEffect(() => {
        Store.product.categories();
        Store.product.trends();
    }, [Store.product.categories, Store.product.trends]);
    const hashSearchBox = useRef();
    return (
        <Layout>
            <Paper elevation={0} classes={paperClasses} style={{height: matchesXS || matchesSM ? 'calc(40vh - 90px)' : 'calc(50vh - 90px)'}}>
                <Hidden only={['xs', 'sm']}>
                    <img src={ladyInYellow} alt="Lady in Yellow" style={ladyInYellowStyle} />
                </Hidden>
                <Box display="flex" justifyContent="center"  alignItems="center" style={{ height: '50%', position: 'relative', width: '100%', zIndex: 100000 }}>
                    <Box ref={hashSearchBox} id="hash-search-box" display="flex" justifyContent="center" alignItems="center" style={{ backgroundColor: "#FFF", borderRadius: '7px 0 0 7px', color: '#2DC7FF', fontSize: 20, height: 50, paddingLeft: 30, width: 10 }}>
                        <span style={{ marginTop: -3 }}>#</span>
                    </Box>
                    <InputBase value={query} onChange={e => setQuery(e.target.value)} classes={inputClasses} placeholder="What do you want?" style={{ width: matchesXS ? '70%' : '35%' }} />
                    {/* <div id="search-box" style={{position: 'absolute', height: 50, width: 200, background: 'red', left: 0}}></div> */}
                    <IconButton style={{ backgroundColor: '#2DC7FF', borderRadius: '0 7px 7px 0', color: '#FFF', height: 50, padding: 20, width: 55 }} onClick={() => history.push('/product?search=' + query)}>
                        <Search />
                    </IconButton>
                </Box>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <a href='https://play.google.com/store/apps/details?id=com.mamaket.app' style={{textDecoration: 'none', color: '#FFF'}} alt="Become a seller">
                        <span style={{backgroundColor: '#2DC7FF', padding: 10, borderRadius: 25, fontSize: 14, cursor: 'pointer'}}>
                            Become a seller
                        </span>
                    </a>
                </div>
            </Paper>

            <div style={{ marginLeft: matchesMD ? '2.5%' : 0, overflow: 'hidden', width: matchesMD ? '95%' : '100%' }}>
                <Grid container spacing={0}>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item xs={12} sm={12} md={3} style={{ backgroundColor: '#FEB300', backgroundImage: `url('${guyOnYellowBackground}')`, backgroundPosition: '-10px 5px', backgroundRepeat: 'no-repeat', height: 300, overflow: 'hidden', width: '100%' }}>
                            <div style={{ color: '#F8F8F8', float: 'right', fontFamily: 'BebasNeue', fontSize: 30, lineHeight: '25px', marginRight: '12.5%', marginTop: 30, width: 90 }}>
                                BECOME A SELLER
                                <br />
                                <div style={{ color: '#F8F8F8', fontFamily: 'Quicksand', fontSize: 13, lineHeight: '15px', width: 155 }}>Sell anything, anytime, anyday</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} style={{ backgroundColor: '#E3DCD6', backgroundImage: `url('${twoGuysOnWhiteBackground}')`, backgroundPosition: '30% 5px', backgroundRepeat: 'no-repeat', height: 300, overflow: 'hidden', width: 'auto' }}>
                            <div style={{ color: '#AFA294', fontFamily: 'BebasNeue', fontSize: 50, lineHeight: '45px', marginLeft: 50, marginTop: 60, width: 200 }}>SHOPPING MADE EASY</div>
                            <div style={{ color: '#AFA294', fontFamily: 'Quicksand', fontSize: 20, marginLeft: 50, marginTop: 0, width: 250 }}>Make orders from your convenience</div>
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid container spacing={0}>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item xs={12} sm={12} md={3}>
                            <Grid item xs={12} style={{ backgroundColor: '#0177B6', color: '#FFFFFF', fontSize: 20, height: 70, padding: 20, textAlign: 'center' }}>
                                All Categories
                            </Grid>
                            <Grid item xs={12} style={{ backgroundColor: '#FFF', border: '1px solid #0177B6' }}>
                                {
                                    Store.product.list.categories.map((prop, i) => (
                                        <Paper key={i} style={{ alignItems: 'center', borderBottom: '1px solid #eee', borderRadius: 0, boxShadow: '0 0 0 0', cursor: 'pointer', display: 'flex', fontSize: 13, justifyContent: 'space-between', marginLeft: 10, marginRight: 10, padding: 11 }}>
                                            <Link to={'/product?category=' + encodeURIComponent(prop.name.toLowerCase()) + '&id=' + prop._id} style={{textDecoration: 'none', color: '#000000'}}>
                                                <span style={{ marginLeft: 5 }}>{prop.name}</span>
                                            </Link>
                                            <ChevronRight />
                                        </Paper>
                                    ))
                                }
                                {/* <Paper style={{ borderBottom: '1px solid #eee', borderRadius: 0, boxShadow: '0 0 0 0', cursor: 'pointer', fontSize: 13, marginLeft: 10, marginRight: 10, padding: 12.5, textAlign: 'center' }}>
                                    See more
                                </Paper> */}
                            </Grid>
                            {/* <Paper style={{boxShadow: '0 0 0 0', marginTop: 10, padding: 5, borderRadius: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Quicksand', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                                <div style={{width: '60%', color: '#0177B6'}}>
                                Download the Mamaket mobile
                                </div>
                                <div style={{color: '#FFAF00', marginBottom: 15}}>Application</div>
                                <img src={appStore} alt="App Store" />
                            </Paper> */}
                        </Grid>
                    </Hidden>

                    <Grid item xs={12} sm={12} md={9} style={{padding: matchesXS || matchesSM ? 10 : 0}}>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item xs={12} style={{ color: '#BBBCC1', fontSize: 20, height: 50, marginLeft: 10, marginTop: matchesSM ? 0 : 20, paddingBottom: 10, paddingTop: 10 }}>
                                Product Categories
                            </Grid>
                        </Hidden>
                        <GridList cols={matchesXS ? 2 : matchesSM ? 3 : 4} spacing={10}>
                            {
                                Store.product.list.categories.map((prop, i) => (
                                    <GridListTile key={i} cols={1}>
                                        <img src={prop.image} alt={prop.name} />
                                        <Link to={'/product?category=' + encodeURIComponent(prop.name.toLowerCase()) + '&id=' + prop._id} style={{textDecoration: 'none'}}>
                                            <GridListTileBar title={prop.name} style={{ backgroundColor: '#0177B6', color: '#000', opacity: 0.7, border: '1px solid #0177B6', left: '50%', position: 'absolute', right: 'auto', top: 'calc(50% - 24px)', transform: 'translate(-50%, 0)' }} />
                                        </Link>
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </Grid>
                </Grid>

                <Grid container style={{ color: '#BBBCC1', fontSize: 20, height: 50, marginLeft: 10, marginTop: matchesSM ? 0 : 20, paddingBottom: 10, paddingTop: 10 }}>
                    Trending Products
                </Grid>
                {/* <ProductCatalogue /> */}
                <ProductCatalogue products={Store.product.list.trends} />
            </div>
        </Layout>
    );
};

export default Home;
