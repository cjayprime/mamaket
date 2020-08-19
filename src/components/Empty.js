import React from 'react';
import { PhotoLibrary } from '@material-ui/icons';

const Empty = ({ icon, title }) => {
    const Image = icon ? icon : PhotoLibrary;
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 25, marginBottom: 25 }}>
            <Image style={{ height: 250, width: 250 }} />
            <div style={{ fontSize: 15, textAlign: 'center' }}>{title}</div>
        </div>
    );
}

export default Empty;
