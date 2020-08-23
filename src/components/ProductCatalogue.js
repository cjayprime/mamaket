import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridList, GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Room, Bookmark, BookmarkBorder } from '@material-ui/icons';

import Store from '../store';


const useGridListTileBarStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
    },
    subtitle: {
        color: '#000000',
        fontSize: 15,
    },
    title: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 5,
    },
    titleWrap: {
        color: '#000000',
    },
}));
const locationStyles = { alignItems: 'center', color: '#FFF', display: 'flex', fontSize: 12, fontWeight: 'bold', height: 'auto', left: 3, position: 'absolute', zIndex: 1000000 };
const bookmarkStyles = {position: 'absolute', right: 3};
const ProductCatalogue = ({ products }) => {
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs', 'sm'));
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm', 'md'));
    const gridListTileBarClasses = useGridListTileBarStyles();
    const [bookmarks, setBookmarks] = useState([]);
    const load = () => {
        Store.product.bookmark.get((result) => {
            setBookmarks(result);
        });
    };
    useEffect(load, [Store.product.bookmark.get]);
    const prod = products//.concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products).concat(products)
    const style = prod.length > 3 ? null : {width: 230, padding: 8};
    return (
        <Grid container style={{ backgroundColor: '#DDDEE0', padding: matchesXS || matchesSM ? 10 : 0 }}>
            <GridList cols={matchesXS ? 2 : matchesSM ? 3 : 5} spacing={10} cellHeight={220}>
                {
                    prod.map((props, i) => {
                        let marked = false;
                        let Component = BookmarkBorder;
                        if(bookmarks.some(mark => mark._id === props._id)){
                            marked = true;
                            Component = Bookmark;
                        }
                        
                        return (
                            <GridListTile key={i} cols={1} style={style}>
                                <Link to={'/product/' + props._id}>
                                    {
                                        props.sellerId.region &&
                                        <div style={locationStyles}>
                                            <Room htmlColor='#FFF' style={{fontSize: 14, marginTop: 2}} />
                                            {props.sellerId.region}
                                        </div>
                                    }
                                    {
                                        <div style={bookmarkStyles}>
                                            <Component
                                                onClick={e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    Store.product.bookmark.set(props._id, marked, load);
                                                }}
                                                htmlColor='#FFF'
                                            />
                                        </div>
                                    }
                                    <img src={props.images[0]} alt={props.name} />
                                    <GridListTileBar
                                        title={props.name}
                                        subtitle={<>{'\u20A6'}{props.price}</>}
                                        classes={gridListTileBarClasses}
                                    />
                                </Link>
                            </GridListTile>
                        )
                    })
                }
            </GridList>
        </Grid>
    );
};

export default ProductCatalogue;
