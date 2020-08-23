import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Mail, PhotoLibrary } from '@material-ui/icons';

import { PrivatePages, Empty } from '../../components';

import Product from './Product';

import Store from '../../store';


const MainProduct = () => {
    // This should import both CurrentUser and OtherUser
    // passing a prop that lets it know what the initial
    // `tab` and `tabs` prop should be
    const { productID } = useParams();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState(-1);
    const [ratingID, setRatingID] = useState(0);
    const [userID, setUserID] = useState('');
    const load = () => {
        Store.product.get(productID, (userID) => {
            setUserID(userID);
            Store.account.rate.get(false, userID, (rate, _id) => {
                setRating(rate);
                setRatingID(_id);
            });
            Store.account.user.other(userID, (user) => {
                const { name, phoneNumber, image } = user;
                setName(name);
                setMobile(phoneNumber);
                setImage(image);
            });
        });
    };
    useEffect(load, [Store.product.get]);
    return (
        <PrivatePages
            iTireOOOPropJustSoMOBXCanWork={Store.product.images}
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
                    if(Store.product.images.length === 0) return <Empty title={<>This product could not be found.</>} />
                    return (
                        <Product
                            images={Store.product.images}
                            name={Store.product.name}
                            description={Store.product.description}
                            price={Store.product.price}
                            id={Store.product.id}
                        />
                    );
                }, icon: null, title: '' },
                { icon: PhotoLibrary, link: '/profile/' + userID, title: 'Product catalogue' },
                { icon: Mail, link: `/message/${userID}`, title: 'Messages' },
            ]}
        />
    );
};

export default MainProduct;
