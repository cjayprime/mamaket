import React, { useEffect, useState } from 'react';
import qs from 'querystring';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

import { ProductCatalogue, Layout, Empty } from '../../components';
import Helper from '../../helper';

import Store from '../../store';

const Category = () => {
    const history = useHistory();
    const location = useLocation();
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    useEffect(() => {
        const query = qs.parse(location.search);
        if(query['?category']){
            setCategory(query['?category']);
            if(query.id){
                Store.product.byCategory(query.id);
            }else{
                history.push('/');
                Helper.notification.error('That product category does not exist.');
            }
        }else if(query['?search']){
            const param = query['?search'];
            setSearch(param);
            Store.product.search(param, () => {

            });
        }else{
            history.push('/');
            Helper.notification.error('That product does not exist.');
        }
    }, [history, location.search]);
    
    return (
        <Layout background="#EBECED">
            <Grid container item xs={12} sm={12} md={12} style={{ width: '90%', marginLeft: '5%', marginTop: 50, display: 'flex', paddingTop: 0 }}>
                <Paper style={{ color: '#3492C5', fontFamily: 'Quicksand', fontSize: 20, minHeight: 230, paddingTop: 0, width: '100%' }}>
                    <div style={{ borderBottom: '2px solid #eee', fontWeight: 'bold', height: 30, padding: 30, width: '100%' }}>
                        {search ? 'Search: ' + search : category.toUpperCase()}
                    </div>
                    {
                        Store.product.list.seller.length === 0
                        ?   <Empty title={"There are no products for this " + (search ? 'search parameter.' : 'category.')} />
                        :   <ProductCatalogue products={Store.product.list.seller} />
                    }
                </Paper>
            </Grid>
        </Layout>
    );
};

export default Category;
