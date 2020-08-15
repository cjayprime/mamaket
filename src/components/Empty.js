import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import { AccountCircle, Image, Notifications, Feedback, People, Settings, PhotoLibrary } from '@material-ui/icons';


const Empty = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
            <PhotoLibrary style={{height: 250, width: 250}} />
            <div style={{fontSize: 15, textAlign: 'center'}}>There are no new adverts to display.<br/> Create a new advert now</div>
        </div>
    )
};

export default Empty;
