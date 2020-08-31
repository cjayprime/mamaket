import React, { useEffect, useState } from 'react';
import { Image, Mail, Settings as SettingsIcon } from '@material-ui/icons';

import ContactDetails from './ContactDetails';
import ChangePassword from './ChangePassword';

import { PrivatePages } from '../../components';

import Store from '../../store';

const Settings = () => {
    const [rating, setRating] = useState(-1);
    const [ratingID, setRatingID] = useState(0);
    const [tabs, setTabs] = useState([
        { icon: Mail, link: '/message', title: 'Inbox' }
    ]);
    const load = () => {
        const id = Store.account.id;
        if(id){
            Store.account.rate.get(true, id, (rate, _id) => {
                setRating(rate);
                setRatingID(_id);
            });
        }
        if(Store.account.role === 'seller'){
            setTabs([
                { component: () => <><ContactDetails/><ChangePassword/></>, icon: SettingsIcon, title: 'Settings' },
                { icon: Mail, link: '/message', title: 'Inbox' },
                { icon: Image, link: '/profile', title: 'Profile' },
            ]);
        }
    };
    useEffect(load, [Store.account.id, Store.account.role]);
    return (
        <PrivatePages
            iTireOOOPropJustSoMOBXCanWork={Store.product.list.sponsored}
            refresh={load}
            rating={rating}
            ratingID={ratingID}
            userID={null}
            name={Store.account.name}
            mobile={Store.account.mobile}
            email={Store.account.confirmed ? false : Store.account.email}
            image={Store.account.image}
            tab={0}
            tabs={tabs}
            editImage={true}
        />
    );
};

export default Settings;
