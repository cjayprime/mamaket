import React, { /*useEffect,*/ useState } from 'react';
import { /*Grid, */Paper } from '@material-ui/core';

// import prod from './prod.png';

// import Store from '../../store';

const Product = ({ images, name, description }) => {
    const [largeImage, setLargeImage] = useState('');
    // const [sponsored, setSponsored] = useState(-1);
    // const load = () => {
    //     Store.product.sponsored(0);
    // };
    // useEffect(load, [Store.product.sponsored]);
    return (
        <>
            <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, paddingTop: 0, width: '100%' }}>
                <div style={{ backgroundPosition: 'center', minHeight: 200, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'auto', overflow: 'hidden' }}>
                    <img src={largeImage || images[0]} style={{ height: 'auto', width: '100%' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5, paddingLeft: 10 }}>
                    {
                        images
                        .map((img, i) => (
                            <div key={i} onClick={() => setLargeImage(img)} style={{ cursor: 'pointer', backgroundImage: `url('${img}')`, backgroundPosition: 'center', backgroundSize: 'cover', border: '1px solid #3492C5', height: 150, margin: 3, width: 150 }}>
                                {/* <img src={prod} style={{width: '100%', height: 'auto'}} /> */}
                            </div>
                        ))
                    }
                </div>

                <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 25 }}>
                    {name}
                </div>

                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                    Recently
                </div>

                <div style={{ backgroundColor: '#EAF4F9', height: 1, marginLeft: 10, marginTop: 30, width: 'calc(100% - 20px)' }} />

                <div style={{ color: '#0177B6', fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 25 }}>
                    Description
                </div>

                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 20, paddingBottom: 20 }}>
                    {description}
                </div>
            </Paper>

            {/*
            <div style={{ color: '#0177B6', backgroundColor: '#EBECED', width: '100%', fontSize: 25, fontWeight: 'bold', paddingTop: 75 }}>
                Sponsored Products
            </div>

            <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, marginTop: 15, minHeight: 500, width: '100%' }}>
                {
                    [1,1,1,1,1]
                    .map((_, i) => (
                        <Grid key={i} container style={{ borderBottom: '1px solid #D6E9F3', height: 250, padding: 0 }} justify="space-around">
                            <Grid item xs={3} style={{ backgroundColor: 'red' }}>
                                <div style={{ backgroundImage: `url('${prod}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%', width: 'auto' }} />
                            </Grid>
                            <Grid item xs={7} style={{ paddingLeft: 15 }}>
                                <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>
                                    Spicy Jolly Rice with Side meals and Veggies
                                </div>
                                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginBottom: 50, marginLeft: 10, marginTop: 20 }}>
                                    Place your order for a plate of our delicious spicy rice with options for side meals like plantain, beans, salad, vegetables, and protein like chicken, beef, or fish. we deliver to your location….
                                </div>

                                <div style={{ color: '#868687', fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                                    Lekki, Lagos
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div style={{ color: '#0177B6', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>
                                    N 3000
                                </div>
                            </Grid>
                        </Grid>
                    ))
                }
            </Paper> */}
        </>
    );
};

export default Product;
