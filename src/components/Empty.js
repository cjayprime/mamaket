import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import { AccountCircle, Image, Notifications, Feedback, People, Settings, PhotoLibrary } from '@material-ui/icons';

const Empty = ({ title }) => (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 25, marginBottom: 25 }}>
        <PhotoLibrary style={{ height: 250, width: 250 }} />
        <div style={{ fontSize: 15, textAlign: 'center' }}>{title}</div>
    </div>
);

export default Empty;
