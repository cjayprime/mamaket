import React from "react";
import { Button } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const ButtonMamaket = props => {
    const { loading } = props;
    return (
        <Button {...props} loading={null}>
            {
                loading
                ?   <CircularProgress style={{color: '#FFFFFF'}} />
                :   props.children
            }
        </Button>
    );
};

export default ButtonMamaket;
