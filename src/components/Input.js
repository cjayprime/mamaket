import React from 'react';
import { InputBase } from '@material-ui/core';

const style = {
    backgroundColor: '#FFF',
    border: '1px solid #99C9E2',
    color: '#67ADD3',
    fontFamily: 'Quicksand',
    fontWeight: 'bolder',
    marginTop: 25,
    padding: 10,
    width: '50%'
};

const Input = props => {
    const { placeholder, onChange, width } = props;
    const newStyle = JSON.parse(JSON.stringify(style));
    if(width){
        newStyle.width = width;
    }
    return (
        <InputBase onChange={onChange} style={newStyle} placeholder={placeholder} />
    );
};

export default Input;
