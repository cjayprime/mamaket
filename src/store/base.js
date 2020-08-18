import { decorate, observable, action } from 'mobx';
import axios from 'axios';
import qs from 'querystring';
import jwtDecode from 'jwt-decode';

import Configuration from '../mamaket.config.js';

import Helper from '../helper';

class Store {
    url = Configuration.url;

    requests = [];
    
    message = '';
    
    status = false;

    api = async (endpoint, method, body, callback) => {
        this.requests.push(endpoint);
        this.message = '';
        const token = await this.storage.get('TOKEN');
        console.log(`${method} request sent to:`, `${this.url}${endpoint}`, ' with parameters: ', body);

        try{
            const decoded = jwtDecode(token);
            if(decoded && decoded.exp * 1000 < new Date().getTime()){
                Helper.error('Your session has expired, sign in again');
                window.location = '/signin';
                return;
            }
        }catch{}

        axios({
            data: body ? qs.stringify(body) : null,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: method,
            processData: true,
            url: `${this.url}${endpoint}`,
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                const error = new Error(response.data.message || response.status);
                error.response = response;
                return Promise.reject(error);
            }
        }).then(response => {
            const result = response.data;
            const status = this.validate.response(result, endpoint);
            if(typeof callback === 'function'){
                callback(result, status);
            }
        }).catch(async e => {
            if(
                typeof e.response !== 'undefined' &&
                typeof e.response.data !== 'undefined' &&
                e.response.data
            ){
                const status = this.validate.response(e.response.data, endpoint);
                if(typeof callback === 'function'){
                    callback(e.response.data, status);
                }
            }else{
                this.loading = false;
                this.message = 'A server error occurred. Contact support. Code: 1000011111';
                this.status = false;
            }
        });
    };

    validate = {
        request: (callback, data, errors, success, error) => {
            // Call this.api for requests without notistack modals i.e initial page loads 
            // Call this.validate.request for requests with automatic notistack modals i.e form requests
            // If there's no message use this.api since the goal of this.validate.request will be defeated
            const errorKeys = Object.keys(errors);
            const dataKeys = Object.keys(data);
            if(
                errorKeys.filter(err => !errors[err]).length === errorKeys.length &&
                dataKeys.filter(elem => !!data[elem]).length === dataKeys.length
            ){
                callback(data, (result, status) => {
                    if(status){
                        result.success &&
                        Helper.notification.success(result.success);

                        if(typeof success === 'function'){
                            success(result, status);
                        }
                    }else{
                        if(Array.isArray(result.message)){
                            result.message.map((text) => {
                                Helper.notification.error(text);
                            });
                        }else{
                            Helper.notification.error(result.message);
                        }
                        
                        if(typeof error === 'function'){
                            error(result, status);
                        }
                    }
                });
            }else{
                if(errorKeys.every(err => !errors[err])){
                    Helper.notification.error('Fill the form appropriately before submitting');
                }else{
                    errorKeys.map(err => {
                        if(errors[err]){
                            Helper.notification.error(errors[err]);
                        }
                    });
                }
            }
        },
        response: (data, endpoint) => {
            const error = !data.message;
            this.requests = this.requests.filter(url => endpoint !== url);
            this.message = data.success ? data.success : Array.isArray(data.message) ? data.message.join('\n') : data.message;
            this.status = error;
            return error;
        }
    };

    storage = {
        get: key => window.localStorage.getItem(key),
        remove: key => window.localStorage.removeItem(key),
        set: (key, value) => {
            this.storage.remove(key);
            return window.localStorage.setItem(key, value);
        },
    };

    initialize = () => {
        const properties = {};
        const tempStore = new this.constructor();
        for(const property in tempStore){
            if(typeof tempStore[property] === 'function'){
                properties[`${property}`] = action;
            }else{
                properties[`${property}`] = observable;
            }
        }
        decorate(this.constructor, properties);
    };
}

const store = new Store();
export const BaseStore = Store;
