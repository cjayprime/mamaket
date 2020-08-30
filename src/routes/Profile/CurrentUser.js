import React, { useEffect, useState } from 'react';
import { Image, Mail } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue, Empty } from '../../components';

import Store from '../../store';


const CurrentUser = () => {
    const [rating, setRating] = useState(-1);
    const [ratingID, setRatingID] = useState(0);
    const [tabs, setTabs] = useState([
        { icon: Mail, link: '/message', title: 'Inbox' }
    ]);
    const load = () => {
        const id = Store.account.id;
        if(id){
            Store.product.bookmark.get();
            Store.account.rate.get(true, id, (rate, _id) => {
                setRating(rate);
                setRatingID(_id);
            });
        }
        if(Store.account.role === 'seller'){
            setTabs([
                { component: () => {
                    if(Store.product.list.bookmarks.length === 0) return <Empty title={<>There are no bookmarked products to display.</>} />
                    return <ProductCatalogue products={Store.product.list.bookmarks} />
                }, icon: Image, title: 'Bookmarks' },
                { icon: Mail, link: '/message', title: 'Inbox' },
                // { component: null, icon: Settings, title: 'Settings' },
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
}

export default CurrentUser;
