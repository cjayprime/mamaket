import React, { useState, useCallback } from 'react';
import { InputBase } from '@material-ui/core';

const inputStyle = {
    backgroundColor: '#FFF',
    border: '1px solid #99C9E2',
    color: '#67ADD3',
    fontFamily: 'Quicksand',
    fontWeight: 'bolder',
    marginBottom: 25,
    padding: 10,
    width: '50%'
};
const errorStyle = {
    marginBottom: 5,
    fontSize: 11,
    color: '#F03A47',
    textAlign: 'left'
};

const Input = props => {
    const { placeholder, type, name, value, onChange, width, compareAgainst } = props;
    const [error, setError] = useState('');
    const newInputStyle = JSON.parse(JSON.stringify(inputStyle));
    const newErrorStyle = JSON.parse(JSON.stringify(errorStyle));
    if(width){
        newInputStyle.width = width;
        newErrorStyle.width = width;
    }
    const change = useCallback((e) => {
        var { target: { value, name } } = e;
        var status = '';
        var error = '';
        if(type === "text") {
            status = ! (/^\s*$/.test(value));
            error = status ? "" : "This field is required!";
        }else if(type === "email") {
            status = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            error = status ? "" : "Please enter a valid email address!";
        }else if(type === "number") {
            status = /^\d+$/.test(value);
            error = status ? "" : "Please enter a valid number!";
        }else if(type === "mobile") {
            status = /^\d{11,11}$/.test(value);
            error = status ? "" : "Please enter a valid mobile number for Nigeria!";
        }else if(type === "password") {
            status = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/.test(value) && value.length > 6;
            error = status ? "" : "Password must have an uppercase letter, a lowercase letter and a number or symbol and be greater than 6 characters!";
        }else if(type === "confirm-password" && ! value) {
            error = "Please confirm your password!";
        }else if(type === "confirm-password" && value !== compareAgainst) {
            error = "Your password and it's confirmation do not match!";
        }
        onChange(value, name, error);
        setError(error);
    }, [onChange]);
    return (
        <>
            {value && error && <div style={newErrorStyle}>{error}</div>}
            <InputBase {...props} name={name} value={value} onChange={change} style={newInputStyle} placeholder={placeholder} />
        </>
    );
};

export default Input;
