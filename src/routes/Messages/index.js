import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, InputBase, Paper, useMediaQuery } from '@material-ui/core';
import { Send, Message } from '@material-ui/icons';

import { Layout, Empty } from '../../components';

import Store from '../../store';


const Messages = () => {
    let date = '';
    let lastSender = '';
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    // const matchesMD = useMediaQuery(theme => theme.breakpoints.between('md', 'lg'));
    const chatBox = useRef();
    const { conversationID } = useParams();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [id, setID] = useState('');
    const [message, setMessage] = useState('');
    const send = () => {
        Store.chat.send(id, message);
        Store.chat.conversations.unshift({
            sender: { image, name },
            text: message,
            createdAt: Store.chat.date(null),
            receiver: id
        });
        setMessage('');
    };
    useEffect(() => {
        if(chatBox.current){
            chatBox.current.scrollTop = chatBox.current.scrollHeight;
        }
    }, [Store.chat.conversations.length]);
    useEffect(() => {
        if(Store.account.id){
            Store.chat.get();
            if(conversationID){
                Store.chat.thread(conversationID, () => {
                    const userID = Store.account.id;
                    Store.chat.start(userID);
                    
                    var otherUser = {};
                    var where = 'receiver';
                    otherUser = Store.chat.conversations.find(convo => convo.receiver !== userID);
                    if(!otherUser){
                        otherUser = Store.chat.conversations.find(convo => convo.sender._id !== userID);
                        where = 'sender';
                    }
                    Store.account.user.other(where === 'receiver' ? otherUser.receiver : otherUser.sender._id, (user) => {
                        const { name, image, _id } = user;
                        setName(name);
                        setImage(image);
                        setID(_id)
                    });
                });
            }
        }

        // return () => Store.chat.socket && Store.chat.socket.disconnect();
    }, [Store.account.id]);
    return (
        <Layout background="#EBECED">
            <Grid container spacing={matchesSM || matchesXS ? 0 : 10} justify="space-evenly" style={{ marginBottom: 0, marginLeft: '5%', marginTop: 100, width: '90%' }}>
                <Grid container item xs={12} sm={12} md={3} direction="column" alignItems="flex-start" style={{ backgroundColor: '#FFF', color: '#0177B6', display: 'flex', fontFamily: 'Quicksand',  background: 'transparent', width: '100%', overflowX: 'hidden', overflowY: 'auto', padding: 0 }}>
                    <Paper style={{display: 'flex', flexDirection: "column", alignItems: 'flex-start', width: '100%', height: 'auto', minHeight: 150}}>
                        <div style={{ background: '#0177B6', color: '#FFFFFF', fontFamily: 'Quicksand', fontSize: 18, height: 30, lineHeight: '20px', padding: 10, paddingLeft: 25, width: '100%' }}>
                            My messages
                        </div>
                        {
                            Store.chat.messages.map((message, i) => {
                                const { participants, latestMessage: { text, read, /*sender,*/ createdAt, conversation }, refProduct } = message;
                                return (
                                    <Messages.User
                                        key={i}
                                        name={participants[0].name}
                                        image={participants[0].image}
                                        text={text}
                                        read={read}
                                        // sender={sender}
                                        date={createdAt}
                                        conversation={conversation}
                                        refProduct={refProduct}
                                    />
                                );
                            })
                        }
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={12} md={9} style={{ marginTop: matchesSM || matchesXS ? 50 : 0, height: 'auto', paddingBottom: 0, paddingTop: 0 }}>
                    <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, overflow: 'hidden', overflowY: 'auto', paddingBottom: 0, paddingTop: 0, width: '100%', zIndex: 10000/*, marginBottom: 0, maxHeight: 550*/ }}>
                        {
                            Store.chat.conversations.length === 0
                            ?   <Empty icon={Message} title={<>You have no messages with {name}</>} />
                            :   !conversationID
                                ?   <Empty icon={Message} title={<>You haven't selected a seller to message.</>} />
                                :   <>
                                        <div style={{ backgroundColor: '#0177B6', borderBottom: '2px solid #eee', color: '#FFFFFF', fontWeight: '900', height: 30, padding: 30, width: '100%' }}>
                                            {name}
                                        </div>
                                        <div style={{overflow: 'auto', overflowX: 'hidden', maxHeight: 500}} ref={chatBox}>
                                        {
                                            Store.chat.conversations
                                            .reverse()
                                            .map((convo, i) => {
                                                const { sender: { image, name }, text, createdAt, receiver } = convo;
                                                const messages = [];
                                                const dateObj = new Date(createdAt);
                                                if(dateObj.getDay() !== date){
                                                    messages.push(
                                                        <div key={i+1} style={{ color: '#6E6E6E', fontSize: 15, margin: 20, textAlign: 'center', width: '100%' }}>
                                                            {Store.chat.date(createdAt)}
                                                        </div>
                                                    );
                                                }
                                                const Component = Store.account.id === receiver ? Messages.Chat.Left : Messages.Chat.Right;
                                                messages.push(
                                                    <Component
                                                        key={i+2}
                                                        image={name !== lastSender || dateObj.getDay() !== date ? image : ''}
                                                        text={text}
                                                    />
                                                );
                                                date = dateObj.getDay();
                                                lastSender = name;
                                                return messages;
                                            })
                                            
                                        }
                                        </div>
                                        <Grid container item direction="row" justify="flex-start" style={{ width: '100%' }}>
                                            <Grid item xs={1} style={{ marginLeft: '5%' }}>
                                            </Grid>
                                            <Grid item xs={8} style={{ border: '1px solid #67ADD3', borderRadius: 15, marginBottom: 10, marginLeft: '5%', marginTop: 0, position: 'relative' }}>
                                                <InputBase
                                                    placeholder="What do you want to buy?"
                                                    style={{ color: '#67ADD3', fontSize: 15, padding: 10, width: 'calc(100% - 25px)' }}
                                                    value={message}
                                                    onChange={e => setMessage(e.target.value)}
                                                    onKeyDown={e => {
                                                        if (e.key === 'Enter') {
                                                            send();
                                                        }
                                                    }}
                                                />
                                                <Send style={{ position: 'absolute', right: 10, top: 13, width: 21, cursor: 'pointer' }} onClick={send} />
                                            </Grid>
                                        </Grid>
                                    </>
                        }
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
    <div style={{ backgroundImage: `url('${image}')`, backgroundPosition: '0 0', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', borderRadius: 69, height: 69, width: 69, backgroundColor: 'grey' }} />
);


Messages.User = ({ name, image, text, read, /*sender,*/ date, conversation, refProduct }) => (
    <Link to={{pathname: '/message/' + conversation, state: { refProduct }}} 
        style={{textDecoration: 'none', borderBottom: '1px solid #D6E9F3', height: 100, padding: 15, textDecoration: 'none', justifyContent: 'space-around', display: 'flex', width: '100%', boxSizing: 'border-box'}}
    >
        <Grid item xs={3}>
            <Messages.Photo image={image} />
        </Grid>
        <Grid item xs={6}>
            <div style={{ color: '#0177B6', fontSize: 15, fontWeight: '900' }}>
                {name}
            </div>
            <div style={{ color: '#6E6E6E', fontSize: 12, height: 45, marginTop: 5, overflow: 'hidden' }}>
                {text}
            </div>
        </Grid>
        <Grid container item xs={1} justify="flex-start">
            <div style={{ color: '#6E6E6E', fontSize: 9, wordWrap: 'break-word' }}>
                {Store.chat.date(date, true)}
            </div>
            {
                !read &&
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ backgroundColor: '#0177B6', borderRadius: 13, height: 13, width: 13 }} />
                </div>
            }
        </Grid>
    </Link>
);

export default Messages;
