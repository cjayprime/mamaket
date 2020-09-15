import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

import footer from '../assets/images/logo/footer.png';
import header from '../assets/images/logo/header.png';
import appStore from '../assets/images/home/appStore.png';

import Style from '../assets/styles';


const Footer = () => {
    const [open, setOpen] = useState(false);
    const matchesXS = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));
    const container = JSON.parse(JSON.stringify(Style.footer.container));
    const scroll = () => {
        setOpen(!open);
        setTimeout(() => {
            window.scrollBy({
                top: 300,
                left: 300,
                behavior: 'smooth'
            });
        }, 1000);
    };
    container.height = matchesXS ? 850 : 500;
    return (
        <>
            {
                matchesXS &&
                (() => {
                    const newContainer = JSON.parse(JSON.stringify(Style.footer.container));
                    newContainer.height = 100;
                    newContainer.cursor = 'pointer';
                    newContainer.marginBottom = -50;
                    return (
                        <Grid container direction="column" justify="center" alignItems="center" style={newContainer} onClick={scroll}>
                            <Grid container item alignItems="center" xs={12} sm={12} md={12}>
                                <img src={header} alt="App Store" style={{marginLeft: '3%'}} />
                            </Grid>
                            {
                                open
                                ?   <ArrowDropUp style={{position: 'absolute', right: '3%', top: '40%', color: '#FFF', fontSize: 30}} />
                                :   <ArrowDropDown style={{position: 'absolute', right: '3%', top: '40%', color: '#FFF', fontSize: 30}} />
                            }
                        </Grid>
                    );
                })()
            }
            {
                (!matchesXS || (matchesXS && open)) &&
                <Grid container justify="center" alignItems="center" style={container}>
                    {
                        !matchesXS &&
                        <Grid container item justify="center" xs={12} sm={12} md={3}>
                            <img src={footer} alt="App Store" />
                        </Grid>
                    }
                    <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={Style.footer.section}>
                        <a href="https://mamaketng.blogspot.com" style={{textDecoration: 'none', color: '#FFF'}}>Blog</a>
                        <a href="https://mamaketng.blogspot.com/2020/09/about-mamaket.html" style={{textDecoration: 'none', color: '#FFF'}}>About Mamaket</a>
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                        <div>Become a seller</div>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={Style.footer.section}>
                        <div>Support</div>
                        <div>Email</div>
                        <div>Safety Tips</div>
                        <div>Contact Us</div>
                        <div>FAQ</div>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={3} direction="column" justify="space-between" alignItems="center" style={Style.footer.section}>
                        <div>Our Apps</div>
                        <div>Download now</div>
                        <img src={appStore} alt="App Store" />
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default Footer;
