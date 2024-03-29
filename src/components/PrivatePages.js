import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Paper, useMediaQuery } from '@material-ui/core';
import { AccountCircle, Star, StarBorder, AddAPhoto } from '@material-ui/icons';

import { Layout } from '.';

import Store from '../store';

const PrivatePages = props => {
    const [photo, setPhoto] = useState(false);
    const inputRef = useRef();
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    const { tabs, tab, userID, rating, ratingID, name, mobile, email, refresh, image, editImage } = props;
    const upload = e => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'profile');
        formData.append('cloud_name', 'mamaket');
        Store.account.upload(formData, url => {
            Store.account.user.update({image: url});
        });
    };
    const View = tabs[tab].component;
    return (
        <Layout background="#EBECED">
            <Grid container spacing={matchesSM || matchesXS ? 0 : 10} justify="space-evenly" style={{ marginBottom: 150, marginLeft: '5%', marginTop: 100, width: '90%' }}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="center" style={{ backgroundColor: '#FFF', color: '#0177B6', display: 'flex', fontFamily: 'Quicksand',  background: name ? 'transparent' : '#FFF', width: '100%', overflowX: 'hidden', overflowY: 'auto', padding: 0 }}>
                    {
                        name &&
                        <Paper style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: 'auto', width: '100%', height: 'auto', minHeight: 150 }}>
                            <input ref={inputRef} style={{opacity: 0}} type="file" onChange={upload} />
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {
                                    editImage && photo
                                    ?   <>
                                            <AddAPhoto
                                                style={{ position: 'absolute', zIndex: 1000, height: 50, width: 50, color: '#FFF', cursor: 'pointer' }}
                                                onMouseLeave={() => setPhoto(false)}
                                                onClick={editImage ? () => {
                                                    inputRef.current.click()
                                                } : null}
                                            />
                                            <div
                                                style={{position: 'absolute', zIndex: 500, height: 125, width: 125, borderRadius: 125, backgroundColor: '#000', opacity: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}
                                                onMouseLeave={() => setPhoto(false)}
                                                onClick={editImage ? () => {
                                                    inputRef.current.click()
                                                } : null}
                                            >
                                            </div>
                                        </>
                                    :   null
                                }
                                {
                                    image
                                    ?   <img
                                            src={image}
                                            style={{ color: '#0177B6', height: 150, width: 150 , borderRadius: 150}}
                                            onMouseOver={() => setPhoto(true)}
                                        />
                                    :   <AccountCircle
                                            style={{ color: '#0177B6', height: 150, width: 150 }}
                                            onMouseOver={() => setPhoto(true)}
                                        />
                                }
                            </div>
                            <div style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 25, fontWeight: 'bold' }}>
                                {name}
                            </div>
                            {/* <div style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 18 }}>
                                {mobile}
                            </div> */}
                            <Grid item style={{ margin: 10 }}>
                                <Rating userID={userID} rating={rating} ratingID={ratingID} refresh={refresh} />
                            </Grid>
                            {
                                email &&
                                <div style={{ background: '#0177B6', color: '#FFFFFF', display: 'flex', fontFamily: 'Quicksand', alignItems: 'center', fontSize: 15, height: 125, justifyContent: 'center', lineHeight: '20px', width: '100%', marginTop: 5, textAlign: 'center' }}>
                                    <span><span style={{ color: '#FFB000', flex: 0 }}>Alerts:</span> <span style={{ opacity: 0.7 }}>Verify your email address</span> {email}</span>
                                </div>
                            }
                            {
                                tabs.map((tab, i) => {
                                    if(!tab.icon || !tab.title) return null;

                                    const style = { alignItems: 'center', borderBottom: '1px solid #eee', borderRadius: 0, boxShadow: '0 0 0 0', color: '#3492C5', cursor: 'pointer', display: 'flex', fontSize: 13, fontWeight: 'bold', width: '90%', padding: 15, textDecoration: 'none' };
                                    const Child = () => (
                                        <>
                                            <tab.icon />
                                            <span style={{letterSpacing: '0.5px', marginLeft: 10}}>{tab.title}</span>
                                        </>
                                    );
                                    return (
                                        <Link onClick={e => {
                                            if(tab.active){
                                                tab.onClick(e);
                                            }
                                        }} to={tab.link ? tab.link : ''} key={i} style={style}>
                                            <Child />
                                        </Link>
                                    )
                                })
                            }
                        </Paper>
                    }
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{ marginTop: matchesSM || matchesXS ? 50 : 0, display: 'flex', paddingTop: 0 }}>
                    <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, minHeight: 230, paddingTop: 0, width: '100%' }}>
                        {
                            tabs[tab].title &&
                            <>
                                <div style={{ borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%' }}>
                                    {tabs[tab].title}
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

const Rating = ({ ratingID, userID, rating, refresh }) => {
    const style = { color: '#FFD700', height: 40, width: 40, cursor: 'pointer' };
    const [active, setActive] = useState(rating);
    const rate = (rating) => {
        Store.account.rate.set(
            ratingID,
            userID,
            rating,
            refresh
        );
    };
    return (
        <>
            {
                [1, 2, 3, 4, 5]
                .map((_, i) => {
                    var index = 0;
                    if(active === -1){
                        // use real rating
                        index = rating;
                    }else{
                        index = active + 1;
                    }
                    const Rated = index > i ? Star : StarBorder;
                    return (
                        <Rated
                            key={i}
                            style={style}
                            onMouseLeave={() => userID && setActive(-1)}
                            onMouseEnter={() => userID && setActive(i)}
                            onClick={() => rate(i)}
                        />
                    );
                })
            }
        </>
    );
}

export default PrivatePages;
