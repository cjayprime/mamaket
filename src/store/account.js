import { decorate, observable, action } from "mobx";
// import jwtDecode from "jwt-decode";

import Base from './base';

class Account {
    api = Base.api;

    validate = Base.validate;

    storage = Base.storage;

    requests = {};

    update = () => {

        this.api("user", "PUT", {
            "first_name":   this.firstname,
            "last_name":    this.lastname,
            "mobile":       this.mobile
        }, "account", "");

    };

    sms = {
        save: (data, callback, last) => {
            this.api("sms", "POST", data, "account", "", (_, passed) => {
                callback();

                if(last && passed){
                    this.getAccounts();
                }
            });
        }
    };
}

var properties = {};
var tempStore = (new Account());

for(var property in tempStore){
    if(typeof tempStore[property] === "function"){
        properties[property + ""] = action;
    }
    // else if(Object.getPrototypeOf(tempStore).hasOwnProperty(property)){
    //     properties[property + ""] = computed;
    // }
    else{
        properties[property + ""] = observable;
    }
}

decorate(Account, properties);

const store = new Account();
export default store;