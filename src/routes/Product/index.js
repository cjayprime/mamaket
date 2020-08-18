import React from 'react';
import { Image, Mail, Feedback, Settings } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../../components';

import Product from './Product';

import OtherUsers from '../Profile/OtherUsers';

const Products = () => {
    // This should import both CurrentUser and OtherUser passing a prop that lets it know what the initial `tab` and `tabs` prop should be
    return (
        <OtherUsers extraTabs={[{ component: Product, icon: null, title: '' }]} />
    );
};

export default Products;
/*
import React from 'react';
import { Image, Mail, Feedback, Settings } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../../components';

import Product from './Product';

const Products = () => 
    // This should import both CurrentUser and OtherUser passing a prop that lets it know what the initial `tab` and `tabs` prop should be
    (
        <PrivatePages
            tab={0}
            type="mine"
            tabs={[
                { component: Product, icon: null, title: '' },
                { component: ProductCatalogue, icon: Image, title: 'My adverts' },
                { icon: Mail, link: '/messages', title: 'Messages' },
                { component: null, icon: Settings, title: 'Settings' },
            ]}
        />
    )
;

export default Products;
*/