import { BaseStore } from './base';

class Product extends BaseStore {
    list = {
        sponsored: [],
        seller: [],
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
            console.log(result, status)
            if(status){
                this.list.seller = result;
            }
        });
    };
}

const store = new Product();
store.initialize();
export default (new Product());
