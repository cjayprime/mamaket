import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Feedback, PhotoLibrary } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../../components';

const OtherUsers = () => {
    const { user: user } = useParams();
    return (
        <PrivatePages
            tab={0}
            type="others"
            username={user}
            tabs={[
                {title: 'Product catalogue', component: ProductCatalogue, icon: PhotoLibrary},
                {title: 'Messages', link: '/message/' + user, icon: Mail},
            ]}
        />
    )
};

export default OtherUsers;
