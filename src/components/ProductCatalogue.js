import React from 'react';
import { Grid, GridList, GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Room } from '@material-ui/icons';

import meatAndPoultry from '../assets/images/category/meatAndPoultry.png';

const useGridListTileBarStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
    },
    subtitle: {
        color: '#BBBCC1',
        fontSize: 15,
    },
    title: {
        color: '#BBBCC1',
        fontSize: 12,
        marginBottom: 5,
    },
    titleWrap: {
        color: '#BBBCC1',
    },
}));
const products = [
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
    { image: meatAndPoultry, location: 'Ajah, Lekki', price: '18,000', title: 'Fresh apples ready for delivery' },
];
const ProductCatalogue = () => {
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    const gridListTileBarClasses = useGridListTileBarStyles();

    return (
        <Grid container style={{ backgroundColor: '#DDDEE0', paddingBottom: 10 }}>
            <GridList cols={matchesXS ? 2 : matchesSM ? 3 : 5} spacing={10} cellHeight={220}>
                {
                    products.map((props, i) => (
                        <GridListTile key={i} cols={1}>
                            <div style={{ alignItems: 'center', color: '#FFF', display: 'flex', fontSize: 12, fontWeight: 'bold', height: 'auto', left: 10, position: 'absolute', zIndex: 1000000 }}>
                                <Room htmlColor='#FFF' />
                                {props.location}
                            </div>
                            <img src={props.image} alt={props.title} />
                            <GridListTileBar title={props.title} subtitle={`N ${props.price}`} classes={gridListTileBarClasses} />
                        </GridListTile>
                    ))
                }
            </GridList>
        </Grid>
    );
};

export default ProductCatalogue;
