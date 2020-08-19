import React, { useEffect, useState } from 'react';
import { Image, Mail/*, Settings*/ } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue, Empty } from '../../components';

import Store from '../../store';


const CurrentUser = () => {
    const [rating, setRating] = useState(-1);
    const [ratingID, setRatingID] = useState(0);
    const load = () => {
        const id = Store.account.id;
        Store.product.sponsored(id);
        Store.account.rate.get(true, id, (rate, _id) => {
            setRating(rate);
            setRatingID(_id);
        });
    };
    useEffect(load, [Store.account.id]);
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
            image={''}
            tab={0}
            tabs={[
                { component: () => {
                    if(Store.product.list.sponsored.length === 0) return <Empty title={<>There are no sponsored products to display.</>} />
                    return <ProductCatalogue products={Store.product.list.sponsored} />
                }, icon: Image, title: 'Sponsored' },
                { icon: Mail, link: '/messages', title: 'Messages' },
                // { component: null, icon: Settings, title: 'Settings' },
            ]}
        />
    );
}

export default CurrentUser;
