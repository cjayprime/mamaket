import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    const { background } = props;
    return (
        <div style={{ backgroundColor: background ? background : '#FFFFFF' }}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
