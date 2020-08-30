import io from 'socket.io-client';

import { BaseStore } from './base';

import Account from './account';


class Chat extends BaseStore {
    messages = [];

    conversations = [];

    total = 0;

    date = (dateString, noDate) => {
        var dateObj;
        if(dateString){
            dateObj = new Date(dateString);
        }else{
            dateObj = new Date();
        }
        const month = dateObj.getMonth();
        const day = dateObj.getDate();
        const date = dateObj.getFullYear() +
                    '-' +
                    ((month + 1) < 10 ? '0' + (month + 1) : (month + 1)) +
                    '-' +
                    (day < 10 ? '0' + day : day);

        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const seconds = dateObj.getSeconds();
        const time =    (hours < 10 ? '0' + hours : hours) +
                        ':' +
                        (minutes < 10 ? '0' + minutes : minutes) +
                        ':' +
                        (seconds < 10 ? '0' + seconds : seconds)
        const createdAt = (noDate ? '' : date + ' ') + time;
        return createdAt;
    };

    // init = (sellerID, callback) => {
    //     this.api('/chat/init-conversation?productId=5efa4cec3550fa0adb038217&sellerId=' + sellerID, 'GET', null, callback);
    // };

    count = () => {
        this.api('/chat/unread-count', 'GET', null, (result, status) => {
            if(status){
                this.total = result;
            }
        });
    };

    get = () => {
        this.api('/chat/list', 'GET', null, (result, status) => {
            if(status){
                this.messages = result;
            }
        });
    };

    thread = (conversationID) => {
        this.api('/chat/load-messages?conversation=' + conversationID, 'GET', null, (result, status) => {
            if(status){
                this.conversations = result;
            }
        });
    };
    
    socket;

    start = () => {
        this.socket = io(this.url, {
            transports: ['websocket'],
            query: { user: Account.id }
        });
        this.socket.on('connect', data => {
            console.log('Connected', data);
        });
        this.socket.on('disconnect', reason => {
            console.log(`Disconnected:`, reason);
        });
        this.receive();
    };

    send = (receiver, text) => {
        const createdAt = this.date(null);
        const dto = ({
            text,
            receiver,
            createdAt,
            sender: {
                id: Account.id,
                name: Account.name
            },
            // refProduct: 'N/A',
        });
        console.log(JSON.stringify(dto))
        this.socket.emit('msgToServer', dto, (data) => {
            console.log('msgToServer', data)
        });
        this.socket.on('msgToServer', (data) => {
            console.log('Message notification', data)
        });
    };

    receive = () => {
        this.socket.on('msgToClient', (data) => {
            console.log('Message received', data)
            this.conversations.unshift(data);
        })
    };
}

const store = new Chat();
store.initialize();
export default (new Chat());
