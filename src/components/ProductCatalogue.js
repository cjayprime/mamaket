import React from 'react';
import { Grid, GridList, GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Room } from '@material-ui/icons';

import meatAndPoultry from '../assets/images/category/meatAndPoultry.png';


const useGridListTileBarStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF'
    },
    titleWrap: {
        color: '#BBBCC1'
    },
    title: {
        color: '#BBBCC1',
        fontSize: 12,
        marginBottom: 5
    },
    subtitle: {
        color: '#BBBCC1',
        fontSize: 15
    }
}));
const products = [
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
    {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
];
const ProductCatalogue = () => {
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    const gridListTileBarClasses = useGridListTileBarStyles();

    return (
        <Grid container style={{paddingBottom: 10, backgroundColor: '#DDDEE0'}}>
            <GridList cols={matchesXS ? 2 : matchesSM ? 3 : 5} spacing={10} cellHeight={220}>
                {
                    products.map((props, i) => (
                        <GridListTile key={i} cols={1}>
                            <div style={{display: 'flex', alignItems: 'center', zIndex: 1000000, position: 'absolute', left: 10, color: '#FFF', fontSize: 12, fontWeight: 'bold', height: 'auto'}}>
                            <Room htmlColor='#FFF' />
                            {props.location}
                            </div>
                            <img src={props.image} alt={props.title} />
                            <GridListTileBar title={props.title} subtitle={'N '+props.price} classes={gridListTileBarClasses} />
                        </GridListTile>
                    ))
                }
            </GridList>
        </Grid>
    );
}

export default ProductCatalogue;
