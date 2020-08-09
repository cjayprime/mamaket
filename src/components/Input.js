import React from 'react';
import { InputBase } from '@material-ui/core';

const style = {backgroundColor: '#FFF', color: '#67ADD3', border: '1px solid #99C9E2', width: '50%', padding: 10, marginTop: 25, fontFamily: 'Quicksand', fontWeight: 'bolder'};

const Input = props => {
    const { placeholder, onChange, width } = props;
    const _style = JSON.parse(JSON.stringify(style));
    if(width){
        _style.width = width;
    }
    return (
        <InputBase onChange={onChange} style={_style} placeholder={placeholder} />
    );
};

export default Input;