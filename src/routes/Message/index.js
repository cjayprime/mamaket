import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, InputBase, IconButton, Paper } from '@material-ui/core';
import { AccountCircle, Star, Mail, Settings, Send } from '@material-ui/icons';

import { Layout, ProductCatalogue, Empty } from '../../components';

import One from './1.png';
import Two from './2.png';
import Three from './3.png';
import Four from './4.png';

const Messages = props => {
    // const { tabs, tab } = props;
    const tab = 0;
    const tabs= [
        {title: 'My adverts', component: ProductCatalogue, icon: Image},
        {title: 'Messages', link: '/message', icon: Mail},
        {title: 'Settings', component: null, icon: Settings},
    ]
    const [currentTab, setCurrentTab] = useState(tab);
    // const View = tabs[currentTab].component;
    return (
        <Layout background="#EBECED">
            <Grid container spacing={10} justify="space-evenly" style={{width: '90%', marginLeft: '5%', marginBottom: 150, marginTop: 100}}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="flex-start" style={{display: 'flex', padding: 0, backgroundColor: '#FFF', overflow: 'hidden', height: 'auto', fontFamily: 'Quicksand', color: '#0177B6'}}>
                    <div style={{width: '100%', fontSize: 18, lineHeight: '20px', fontFamily: 'Quicksand', background: '#0177B6', color: '#FFFFFF', height: 30, padding: 10, paddingLeft: 25}}>
                        My messages
                    </div>
                    <Messages.User image={One} />
                    <Messages.User image={Two} />
                    <Messages.User image={Three} />
                    <Messages.User image={Four} />
                    <Messages.User image={Two} />
                    <Messages.User image={One} />
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{display: 'flex', paddingTop: 0, paddingBottom: 0, height: 10}}>
                    <Paper style={{paddingTop: 0, paddingBottom: 0, fontFamily: 'Quicksand', overflow: 'hidden', fontSize: 20, width: '100%', color: '#3492C5'}}>
                        <div style={{borderBottom: '2px solid #eee', color: '#FFFFFF', backgroundColor: '#0177B6', fontWeight: '900', height: 30, padding: 30, width: '100%'}}>
                            John Doe
                        </div>
                        {/* <Empty page="messages" /> */}
                        <Messages.Chat.Left
                            image={One}
                            text="A sunny rjdnwi sokskow skwskwo skowkswo wsowoks wokwoks owksw skws wswkop qpqlqp"
                        />
                        <div style={{width: '100%', textAlign: 'center', color: '#6E6E6E', fontSize: 15, margin: 20}}>
                            Friday, 18th 2020
                        </div>
                        <Messages.Chat.Left
                            text="A sunny"
                        />
                        <Messages.Chat.Right
                            text="A sunny"
                        />
                        <Messages.Chat.Right
                            text="A sunny rjdnwi sokskow skwskwo skowkswo wsowoks wokwoks owksw skws wswkop qpqlqp"
                        />
                        
                        <Grid container item direction="row" justify="flex-start" style={{width: '100%'}}>
                            <Grid item xs={1} style={{marginLeft: '5%'}}>
                            </Grid>
                            <Grid item xs={8} style={{marginLeft: '5%', borderRadius: 15, marginBottom: 50, position: 'relative', border: '1px solid #67ADD3'}}>
                                <InputBase
                                    placeholder="What do you want to buy?"
                                    style={{width: 'calc(100% - 25px)', fontSize: 15, padding: 10, color: '#67ADD3'}}
                                />
                                <Send style={{position: 'absolute', right: 10, width: 21, top: 13}} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

Messages.Chat = {
    Left: ({ image, text }) => (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginTop: 10, marginBottom: 10}}>
            <div style={{marginLeft: '5%', width: 69, maxWidth: '20%'}}>
                {
                    image &&
                    <Messages.Photo image={image} />
                }
            </div>
            <div item xs={8} style={{height: 'auto', marginLeft: '5%', maxWidth: '65%'}}>
                <div style={{width: 'auto', padding: 15, backgroundColor: '#0177B6', color: '#FFFFFF', fontSize: 15, borderRadius: '20px 20px 20px 0'}}>
                    {text}
                </div>
            </div>
        </div>
    ),
    Right: ({ text }) => (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 10, marginBottom: 10}}>
            <div item xs={8} style={{height: 'auto', marginRight: '15%', maxWidth: '65%'}}>
                <div style={{padding: 15, backgroundColor: '#3DBEDC', color: '#FFFFFF', fontSize: 15, borderRadius: '20px 20px 0 20px'}}>
                    {text}
                </div>
            </div>
        </div>
    )
};

Messages.Photo = ({ image }) => (
    <div style={{backgroundImage: "url('" + image + "')", height: 69, width: 69, borderRadius: 69, backgroundRepeat: 'no-repeat', backgroundPosition: '0 0', backgroundSize: 'contain'}} />
);

Messages.User = ({ image }) => (
    <Grid container style={{height: 100, padding: 15, borderBottom: '1px solid #D6E9F3'}} justify="space-around">
        <Grid item xs={3}>
            <Messages.Photo image={image} />
        </Grid>
        <Grid item xs={6}>
            <div style={{color: '#0177B6', fontSize: 15, fontWeight: '900'}}>
                John Doe
            </div>
            <div style={{color: '#6E6E6E', fontSize: 12, overflow: 'hidden', height: 45, marginTop: 5}}>
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
            </div>
        </Grid>
        <Grid container item xs={1} justify="flex-start">
            <div style={{color: '#6E6E6E', fontSize: 12}}>
                Now
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{backgroundColor: '#0177B6', height: 13, width: 13, borderRadius: 13}} />
            </div>
        </Grid>
    </Grid>
);

export default Messages;
