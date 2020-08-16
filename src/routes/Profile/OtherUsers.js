import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Feedback, PhotoLibrary } from '@material-ui/icons';

import { PrivatePages, ProductCatalogue } from '../../components';

const OtherUsers = () => {
    const { user } = useParams();
    return (
        <PrivatePages
            tab={0}
            type="others"
            username={user}
            tabs={[
                { component: ProductCatalogue, icon: PhotoLibrary, title: 'Product catalogue' },
                { icon: Mail, link: `/message/${user}`, title: 'Messages' },
            ]}
        />
    );
};

export default OtherUsers;
