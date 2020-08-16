import { decorate, observable, action } from "mobx";
// import jwtDecode from "jwt-decode";

import Base from './base';

class Account {
    api = Base.api;

    validate = Base.validate;

    storage = Base.storage;

    requests = {};

    signin = ({firstname, lastname, mobile}) => {

        this.api("user", "POST", {
            "first_name":   firstname,
            "last_name":    lastname,
            "mobile":       mobile,
        }, "account", "");

    };

    update = () => {

        this.api("user", "PUT", {
            "first_name":   this.firstname,
            "last_name":    this.lastname,
            "mobile":       this.mobile,
        }, "account", "");

    };
}

const properties = {};
const tempStore = (new Account());

for(const property in tempStore){
    if(typeof tempStore[property] === "function"){
        properties[`${property}`] = action;
    }
    // else if(Object.getPrototypeOf(tempStore).hasOwnProperty(property)){
    //     properties[property + ""] = computed;
    // }
    else{
        properties[`${property}`] = observable;
    }
}

decorate(Account, properties);

const store = new Account();
export default store;
