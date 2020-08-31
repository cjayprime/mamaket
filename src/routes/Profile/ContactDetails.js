import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, useMediaQuery } from '@material-ui/core';

import { Input, Button } from '../../components';

import Store from '../../store';

import Styles from '../../assets/styles';


const ContactDetails = () => {
    const loading = Store.account.requests.some((endpoint) => endpoint === '/auth/change-password');
    const [data, setData] = useState({firstname: '', lastname: '', mobile: ''});
    const {firstname, lastname, mobile} = data;
    const [errors, setErrors] = useState('');
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const width = matchesXS ? '80%' : '50%';
    const change = (value, name, error) => {
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: error });
    };
    const submit = () => {
        Store.account.validate.request(Store.account.user.update, {
            name: firstname + ' ' + lastname,
            phoneNumber: mobile,
        }, errors);
    };
    const buttonStyles = JSON.parse(JSON.stringify(Styles.auth.button));
    buttonStyles.marginTop = 10;
    return (
        <Grid style={Styles.auth.paper}>
            <div style={{marginTop: 50}}>Contact Details</div>
            <div style={{marginTop: 20}} />
            <Input type='text' placeholder='First Name' name='firstname' width={width} value={firstname} onChange={change} />
            <Input type='text' placeholder='Last Name' name='lastname' width={width} value={lastname}  onChange={change} />
            <Input type='text' placeholder='Phone Number' name='mobile' width={width} value={mobile} onChange={change} />
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
export default observer(ContactDetails);