import jwtDecode from 'jwt-decode';

import { BaseStore } from './base';

import Helper from '../helper';

class Account extends BaseStore {
    id = 0;

    name = '';

    mobile = '';

    email = '';

    confirmed = false;

    role = '';

    image = '';

    signout = () => {
        this.storage.remove('TOKEN');
        Helper.notification.success('Successfully logged out');
    };

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

    changePassword = data => {
        this.api('/auth/change-password', 'POST', {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
        }, (result, status) => {
            console.log(result, status)
            if(status){
                Helper.notification.success('Successfully chnaged your password');
            }
        });
    };

    upload = (formData, callback) => {
        const { success, error } = Helper.notification;
        fetch('https://api.cloudinary.com/v1_1/mamarket/upload', {
            method: 'POST',
            body: formData,
        })
        .then(async (response) => {
            const res = await response.json();
            if(res.secure_url){
                callback(res.secure_url);
                success('Image uploaded successfully.');
            }else{
                error(res.error.message);
            }
        })
        .catch(() => {
            error('An error occured with the request.');
        });
    };

    user = {
        update: data => {
            const { success, error } = Helper.notification;
            this.api('/profile', 'PUT', data, (result, status) => {
                console.log(result, status)
                if(status){
                    this.user.current();
                    success('Sucessfully updated your profile.');
                }else{
                    error(
                        'Failed to update your profile:\n' + 
                        (result.message && result.message.length ? result.message.join('\n') : '')
                    );
                }
            });
        },
        current: () => {
            this.api('/profile', 'GET', null, (result, status) => {
                if(status){
                    this.id = result._id;
                    this.name = result.name;
                    this.mobile = result.phoneNumber;
                    this.email = result.email;
                    this.confirmed = result.confirmed;
                    this.image = result.image;
                    this.role = result.role;
                }else{
                    // If request fails test the token validity, and go to log in if invalid
                    try{
                        const token = this.storage.get('TOKEN');
                        const decoded = jwtDecode(token);
                        if(decoded && decoded.exp * 1000 < new Date().getTime()){
                            Helper.error('Your session has expired, sign in again');
                            window.location = '/signin';
                            return;
                        }
                    }catch{}
                }
            });
        },
        other: (userID, callback) => {
            this.api('/profile/' + userID, 'GET', null, (result, status) => {
                if(status){
                    callback(result);
                }else{
                    // If request fails go to /profile page
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
    };
}

const store = new Account();
store.initialize();
export default (new Account());
