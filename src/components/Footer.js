import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

import footer from '../assets/images/logo/footer.png';
import header from '../assets/images/logo/header.png';
import androidStore from '../assets/images/home/androidStore.png';

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
                        <a href="https://mamaketng.blogspot.com"  style={Style.footer.text}>Blog</a>
                        <a href="https://mamaketng.blogspot.com/2020/09/about-mamaket.html" style={Style.footer.text}>About Mamaket</a>
                        <a href="https://mamaketng.blogspot.com/2020/12/privacy-policy.html" style={Style.footer.text}>Terms & Conditions</a>
                        <a href="https://mamaketng.blogspot.com/2020/12/terms-of-use.html" style={Style.footer.text}>Privacy Policy</a>
                        <a href="https://www.instagram.com/mamaketblu" style={Style.footer.text}>Instagram</a>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={2} direction="column" justify="space-between" alignItems="center" style={Style.footer.section}>
                        <div style={Style.footer.text}>Safety Tips</div>
                        <a style={Style.footer.text} href="mailto:unru@mamaketblu.org">Contact Us</a>
                        <a style={Style.footer.text} href="https://twitter.com/mamaketn">Twitter</a>
                        <a style={Style.footer.text} href="https://wa.me/23480375645421">Whatsapp</a>
                        <a href="https://www.facebook.com/mamaket9ja" style={Style.footer.text}>Facebook</a>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={3} direction="column" justify="space-between" alignItems="center" style={Style.footer.section}>
                        <div style={Style.footer.text}>Our Apps</div>
                        <div style={Style.footer.text}>Download now</div>
                        <a style={Style.footer.text} href="https://play.google.com/store/apps/details?id=com.mamaket.app">
                            <img src={androidStore} style={{width: 170, height: 50}} alt="App Store" />
                        </a>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default Footer;
