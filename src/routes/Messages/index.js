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
        { component: ProductCatalogue, icon: Image, title: 'My adverts' },
        { icon: Mail, link: '/message', title: 'Messages' },
        { component: null, icon: Settings, title: 'Settings' },
    ];
    const [currentTab, setCurrentTab] = useState(tab);
    // const View = tabs[currentTab].component;
    return (
        <Layout background="#EBECED">
            <Grid container spacing={10} justify="space-evenly" style={{ marginBottom: 150, marginLeft: '5%', marginTop: 100, width: '90%' }}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="flex-start" style={{ backgroundColor: '#FFF', color: '#0177B6', display: 'flex', fontFamily: 'Quicksand', height: 'auto', overflow: 'hidden', padding: 0 }}>
                    <div style={{ background: '#0177B6', color: '#FFFFFF', fontFamily: 'Quicksand', fontSize: 18, height: 30, lineHeight: '20px', padding: 10, paddingLeft: 25, width: '100%' }}>
                        My messages
                    </div>
                    <Messages.User image={One} />
                    <Messages.User image={Two} />
                    <Messages.User image={Three} />
                    <Messages.User image={Four} />
                    <Messages.User image={Two} />
                    <Messages.User image={One} />
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{ display: 'flex', height: 10, paddingBottom: 0, paddingTop: 0 }}>
                    <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, overflow: 'hidden', paddingBottom: 0, paddingTop: 0, width: '100%' }}>
                        <div style={{ backgroundColor: '#0177B6', borderBottom: '2px solid #eee', color: '#FFFFFF', fontWeight: '900', height: 30, padding: 30, width: '100%' }}>
                            John Doe
                        </div>
                        {/* <Empty page="messages" /> */}
                        <Messages.Chat.Left
                            image={One}
                            text="A sunny rjdnwi sokskow skwskwo skowkswo wsowoks wokwoks owksw skws wswkop qpqlqp"
                        />
                        <div style={{ color: '#6E6E6E', fontSize: 15, margin: 20, textAlign: 'center', width: '100%' }}>
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
                        
                        <Grid container item direction="row" justify="flex-start" style={{ width: '100%' }}>
                            <Grid item xs={1} style={{ marginLeft: '5%' }}>
                            </Grid>
                            <Grid item xs={8} style={{ border: '1px solid #67ADD3', borderRadius: 15, marginBottom: 50, marginLeft: '5%', marginTop: 50, position: 'relative' }}>
                                <InputBase
                                    placeholder="What do you want to buy?"
                                    style={{ color: '#67ADD3', fontSize: 15, padding: 10, width: 'calc(100% - 25px)' }}
                                />
                                <Send style={{ position: 'absolute', right: 10, top: 13, width: 21 }} />
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10, marginTop: 10, width: '100%' }}>
            <div style={{ marginLeft: '5%', maxWidth: '20%', width: 69 }}>
                {
                    image &&
                    <Messages.Photo image={image} />
                }
            </div>
            <div xs={8} style={{ height: 'auto', marginLeft: '5%', maxWidth: '65%' }}>
                <div style={{ backgroundColor: '#0177B6', borderRadius: '20px 20px 20px 0', color: '#FFFFFF', fontSize: 15, padding: 15, width: 'auto' }}>
                    {text}
                </div>
            </div>
        </div>
    ),
    Right: ({ text }) => (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, marginTop: 10, width: '100%' }}>
            <div xs={8} style={{ height: 'auto', marginRight: '15%', maxWidth: '65%' }}>
                <div style={{ backgroundColor: '#3DBEDC', borderRadius: '20px 20px 0 20px', color: '#FFFFFF', fontSize: 15, padding: 15 }}>
                    {text}
                </div>
            </div>
        </div>
    ),
};

Messages.Photo = ({ image }) => (
    <div style={{ backgroundImage: `url('${image}')`, backgroundPosition: '0 0', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', borderRadius: 69, height: 69, width: 69 }} />
);

Messages.User = ({ image }) => (
    <Grid container style={{ borderBottom: '1px solid #D6E9F3', height: 100, padding: 15 }} justify="space-around">
        <Grid item xs={3}>
            <Messages.Photo image={image} />
        </Grid>
        <Grid item xs={6}>
            <div style={{ color: '#0177B6', fontSize: 15, fontWeight: '900' }}>
                John Doe
            </div>
            <div style={{ color: '#6E6E6E', fontSize: 12, height: 45, marginTop: 5, overflow: 'hidden' }}>
                {/* {lastMessage} */}
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
                Lorem ipsum
            </div>
        </Grid>
        <Grid container item xs={1} justify="flex-start">
            <div style={{ color: '#6E6E6E', fontSize: 12 }}>
                Now
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div style={{ backgroundColor: '#0177B6', borderRadius: 13, height: 13, width: 13 }} />
            </div>
        </Grid>
    </Grid>
);

export default Messages;
