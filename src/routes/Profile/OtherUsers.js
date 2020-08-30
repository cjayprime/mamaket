import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Mail, PhotoLibrary } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue, Empty } from '../../components';

import Store from '../../store';

const OtherUsers = () => {
    const history = useHistory();
    const { userID } = useParams();
    const [conversationID, setConversationID] = useState(0);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState(-1);
    const [ratingID, setRatingID] = useState(0);
    const load = () => {
        Store.account.user.other(userID, (user) => {
            const { name, phoneNumber, image } = user;
            setName(name);
            setMobile(phoneNumber);
            setImage(image);
        });
        Store.product.list.seller = [];
        Store.product.seller(userID);
        Store.account.rate.get(false, userID, (rate, _id) => {
            setRating(rate);
            setRatingID(_id);
        });
        Store.chat.get();
    };
    useEffect(load, [Store.account.user]);
    return (
        <PrivatePages
            iTireOOOPropJustSoMOBXCanWork={Store.product.list.seller}
            refresh={load}
            rating={rating}
            ratingID={ratingID}
            userID={userID}
            name={name}
            mobile={mobile}
            email={false}
            image={image}
            tab={0}
            tabs={[
                { component: () => {
                    if(Store.product.list.seller.length === 0) return <Empty title={<>There are no products in this catalogue.</>} />
                    return <ProductCatalogue products={Store.product.list.seller} />
                }, icon: PhotoLibrary, title: 'Product catalogue' },
                { icon: Mail, link: userID ? `/message/${userID}` : '', active: !!userID, title: 'Chat with seller'},
            ]}
        />
    );
};

export default OtherUsers;
