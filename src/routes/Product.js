import React from 'react';
import { Image, Mail, Feedback, Settings } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../components';

const CurrentUser = () => {
    return (
        <PrivatePages
            tab={0}
            type="mine"
            tabs={[
                {title: 'My adverts', component: ProductCatalogue, icon: Image},
                {title: 'Messages', link: '/messages', icon: Mail},
                {title: 'Settings', component: null, icon: Settings},
            ]}
        />
    )
};

export default CurrentUser;
