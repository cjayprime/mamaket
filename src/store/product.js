import { BaseStore } from './base';

class Product extends BaseStore {
    list = {
        sponsored: [],
        seller: [],
        trends: [],
        categories: []
    };

    images = [];

    name  = '';

    description  = '';

    get = (id, callback) => {
        this.api('/product/' + id, 'GET', null, (result, status) => {
            if(status){
                this.name = result.name;
                this.description = result.description;
                this.images = result.images;
                callback(result.sellerId._id);
            }
        });
    };

    sponsored = id => {
        this.api('/product/seller/sponsored/' + id, 'GET', null, (result, status) => {
            if(status){
                this.list.sponsored = result;
            }
        });
    };

    seller = id => {
        this.api('/product/seller/' + id, 'GET', null, (result, status) => {
            if(status){
                this.list.seller = result;
            }
        });
    };

    trends = () => {
        this.api('/product/trending', 'GET', null, (result, status) => {
            if(status){
                this.list.trends = result;
            }
        });
    };

    categories = () => {
        this.api('/category', 'GET', null, (result, status) => {
            if(status){
                this.list.categories = result;
            }
        });
    };
}

const store = new Product();
store.initialize();
export default (new Product());
