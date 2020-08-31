import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, useMediaQuery } from '@material-ui/core';

import { Input, Button } from '../../components';

import Store from '../../store';

import Styles from '../../assets/styles';


const ChangePassword = () => {
    const loading = Store.account.requests.some((endpoint) => endpoint === '/auth/change-password');
    const [data, setData] = useState({oldPassword: '', newPassword: ''});
    const {oldPassword, newPassword} = data;
    const [errors, setErrors] = useState('');
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const width = matchesXS ? '80%' : '50%';
    const change = (value, name, error) => {
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: error });
    };
    const submit = () => {
        Store.account.validate.request(Store.account.changePassword, {
            oldPassword,
            newPassword,
        }, errors);
    };
    const buttonStyles = JSON.parse(JSON.stringify(Styles.auth.button));
    buttonStyles.marginTop = 10;
    return (
        <Grid style={Styles.auth.paper}>
            <div style={{marginTop: 50}}>Change password</div>
            <div style={{marginTop: 20}} />
            <Input type='password' placeholder='Old Password' name='oldPassword' width={width} value={oldPassword} onChange={change} />
            <Input type='password' placeholder='New Password' name='newPassword' width={width} value={newPassword}  onChange={change} />
            <Button
                loading={loading}
                onClick={submit}
                variant='contained'
                color='primary'
                style={buttonStyles}
            >
                Save
            </Button>
        </Grid>
    );
};
export default observer(ChangePassword);