import axios from "axios";

import Configuration from '../mamaket.config.js';

class Store {
    url = Configuration.url;

    api = async (endpoint, method, body, subStore, callback) => {
        this[subStore]["requests"].push(endpoint);
        this[subStore]["message"] = "";
        console.log(subStore, method + " request sent to:", this.url + "" + endpoint, ' with parameters: ', body);
        
        axios({
            url: this.url + "" + endpoint,
            method: method,
            data: body ? JSON.stringify(body) : null,
            processData: false,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + await this.storage.get("TOKEN")
            }
        }).then((response) => {
            
            if (response.status >= 200 && response.status < 300) {
                
                return Promise.resolve(response)

            } else {
                
                var error = new Error(response.data.message || response.status);
                error.response = response;
                return Promise.reject(error)
            
            }

        }).then((response) => {

            // console.log('Response from ', endpoint, ' ', response.data)
            var result = response.data;
            const status = this.validate.response(result.status.code, result.status.desc, subStore, endpoint);

            if(typeof callback === "function") callback(result, status);

        }).catch(async (e) => {
            console.log("A fatal error occurred with the server during a request to the " + this.url + '' + endpoint + " API. The error was: `"+ e + "`.", e)

            if(
                typeof e.response !== 'undefined' &&
                typeof e.response.data !== 'undefined' &&
                e.response.data.status && e.response.data.status.code
            ){

                const status = this.validate.response(e.response.data.status.code, e.response.data.status.desc, subStore, endpoint);
                if(typeof callback === "function")
                callback(e.response.data, status);

            }else{

                this[subStore]["loading"] = false;
                this[subStore]["message"] = "A server error occurred. Contact support. Code: 1000011111";
                this[subStore]["status"] = false;

            }
        });

    };

    validate = {
        email: email => {
            return (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        },
        response: (code, message, subStore, endpoint) => {
            /*
                API Responses Codes
    
                100 - Success
                101 - Success (Empty Records)
                102 - Error Reading Resource (Parameters are not Complete)
                105 - Email ALready Registered
                115 - Server Error
            */
            if(! message){
                if(code === 100){
                    message = "Your request completed successfully.";
                }else if(code === 101){
                    message = "Your request completed successfully, but there are no records.";
                }else if(code === 102){
                    message = "Error reading resource. Contact the admin.";
                }else if(code === 105){
                    message = "This email is already registered.";
                }else if(code === 115){
                    message = "A server error occurred. Contact the admin.";
                }
            }

            var error = code === 100 || code === 101;

            this[subStore]["loading"] = false;
            this[subStore]["requests"] = this[subStore]["requests"].filter(url => endpoint !== url);
            this[subStore]["message"] = message;
            this[subStore]["status"] = error;

            return error;
        

        },
        form: (type, value, compareAgainst) => {

            var status = true;
            var message = "";

            if(type === "text") {
                status = ! (/^\s*$/.test(value));
                message = status ? "" : "This field is required!";
            }else if(type === "email") {
                status = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                message = status ? "" : "Please enter a valid email address!";
            }else if(type === "number") {
                status = /^\d+$/.test(value);
                message = status ? "" : "Please enter a valid number!";
            }else if(type === "mobile") {
                status = /^\+[0-9]+$/.test(value);
                message = status ? "" : "Please enter a valid mobile number including the area code (i.e. +234)!";
            }else if(type === "password" && ! value) {
                message = "Please enter your password!";
            }else if(type === "confirm-password" && ! value) {
                message = "Please confirm your password!";
            }else if(type === "confirm-password" && value !== compareAgainst) {
                message = "Your password and it's confirmation do not match!";
            }

            return message;
        
        }
    };

    storage = {
        set: (key, value) => {
            window.localStorage.removeItem(key);
            return window.localStorage.setItem(key, value);
        },
        get: key => {
            return window.localStorage.getItem(key);
        },
        remove: key => {
            return window.localStorage.removeItem(key);
        }
    };
}

const store = new Store();
export default store;