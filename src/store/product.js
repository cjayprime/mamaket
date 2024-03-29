import { BaseStore } from './base';

class Product extends BaseStore {
    list = {
        sponsored: [],
        seller: [],
        trends: [],
        categories: [],
        bookmarks: []
    };

    images = [];

    name  = '';

    description  = '';

    price = '';

    id = '';

    get = (id, callback) => {
        this.api('/product/' + id, 'GET', null, (result, status) => {
            console.log(result, status)
            if(status){
                this.name = result.name;
                this.description = result.description;
                this.images = result.images;
                this.price = result.price;
                this.id = result._id;
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

    seller = (id, callback) => {
        this.api('/product/seller/' + id, 'GET', null, (result, status) => {
            if(status){
                this.list.seller = result;
                if(callback){
                    callback(result, status);
                }
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

    byCategory = categoryID => {
        this.api('/product?categoryId=' + categoryID, 'GET', null, (result, status) => {
            console.log(result, status)
            if(status){
                this.list.seller = result;
            }
        });
    };

    bookmark = {
        get: callback => {
            this.api('/product/bookmarked', 'GET', null, (result, status) => {
                if(status){
                    this.list.bookmarks = result;
                    if(callback){
                        callback(result);
                    }
                }
            });
        },
        set: (id, marked, callback) => {
            const url = marked ? '/product/bookmark/remove/' + id : '/product/bookmark/' + id;
            this.api(url, 'PUT', null, (result, status) => {
                if(status){
                    callback(result);
                }
            });
        }
    };

    search = (query, callback) => {
        this.api('/product/search/' + query, 'GET', null, (result, status) => {
            console.log(result, status)
            if(status){
                this.list.seller = result;
                callback(result);
            }
        });
    };
}

const store = new Product();
store.initialize();
export default (new Product());
