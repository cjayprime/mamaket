import { BaseStore } from './base';

import Helper from '../helper';

class Account extends BaseStore {
    id = 0;

    name = '';

    mobile = '';

    email = '';

    confirmed = false;

    role = '';

    signup = (data, callback) => {
        this.api('/auth/signup', 'POST', data, (result, status) => {
            if(status){
                this.name = data.name;
                this.mobile = data.mobile;
                this.email = data.email;
            }
            callback(result, status);
        });
    };

    signin = (data, callback) => {
        this.api('/auth/login', 'POST', data, (result, status) => {
            if(status){
                this.name = result.name;
                this.mobile = result.phoneNumber;
                this.email = result.email;
                this.role = result.role;
                this.storage.set('TOKEN', result.accesstoken);
                Helper.notification.success('Successfully logged in');
            }
            callback(result, status);
        });
    };

    user = {
        current: callback => {
            this.api('/profile', 'GET', null, (result, status) => {
                if(status){
                    this.id = result._id;
                    this.name = result.name;
                    this.mobile = result.phoneNumber;
                    this.email = result.email;
                    this.confirmed = result.confirmed;
                    callback(this.id);
                }
            });
        },
        other: (userID, callback) => {
            this.api('/profile/' + userID, 'GET', null, (result, status) => {
                if(status){
                    callback(result);
                }
            });
        }
    };

    rate = {
        get: (me, id, callback) => {
            // If it's my profile then me is true, or else it is false
            const url = me ? '/rating?sellerId=' + id : '/rating/check?sellerId=' + id
            this.api(url, 'GET', null, (result, status) => {
                if(status){
                    if(me){
                        callback(result[0].avgRating, result[0]._id);
                    }else{
                        callback(result.rating, result._id);
                    }
                }
            });
        },
        set: (ratingID, sellerId, rating, callback) => {
            const url = ratingID ? '/rating/edit/' + ratingID : '/rating/rate';
            const method = ratingID ? 'PUT' : 'POST';
            if(sellerId){
                this.api(url, method, {
                    sellerId,
                    rating
                }, (_, status) => {
                    if(status){
                        callback();
                        Helper.notification.success('You have successfully rated this user.');
                    }else{
                        Helper.notification.error('An error occured while trying to rate this user.');
                    }
                });
            }else{
                Helper.notification.error('You cannot rate yourself.');
            }
        }
    }
}

const store = new Account();
store.initialize();
export default (new Account());
