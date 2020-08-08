import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';

import footer from '../assets/images/logo/footer.png';
import appStore from '../assets/images/home/appStore.png';


const Footer = () => {
    const matchesXS = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));
    return (
        <Grid container justify="center" alignItems="center" style={{backgroundColor: '#0177B6', fontSize: 17, fontFamily: 'Quicksand', color: '#FFFFFF', height: matchesXS ? 1500 : 500, marginTop: 50,}}>
            <Grid container item justify="center" xs={12} sm={12} md={3}>
                <img src={footer} alt="App Store" />
            </Grid>
            <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={{height: 200}}>
                <div>About us</div>
                <div>About Mamaket</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
                <div>Become a seller</div>
            </Grid>
            <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={{height: 200}}>
                <div>Support</div>
                <div>Email</div>
                <div>Safety Tips</div>
                <div>Contact Us</div>
                <div>FAQ</div>
            </Grid>
            <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={{height: 200}}>
                <div>Our Socials</div>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Instagram</div>
                <div>Youtube</div>
            </Grid>
            <Grid container item xs={12} sm={12} md={3} direction="column" justify="space-between" alignItems="center" style={{height: 200}}>
                <div>Our Apps</div>
                <div>Download now</div>
                <img src={appStore} alt="App Store" />
            </Grid>
        </Grid>
    );
}

export default Footer;