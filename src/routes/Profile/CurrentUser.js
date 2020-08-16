import React from 'react';
import { Image, Mail, Feedback, Settings } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../../components';

const CurrentUser = () => (
    <PrivatePages
        tab={0}
        type="mine"
        tabs={[
            { component: ProductCatalogue, icon: Image, title: 'My adverts' },
            { icon: Mail, link: '/messages', title: 'Messages' },
            { component: null, icon: Settings, title: 'Settings' },
        ]}
    />
);

export default CurrentUser;
