// Public route components
// Note: Code spliting cannot work here!
// Cause I wrap these components in a call
// to mobx-react observer
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import CurrentUser from './Profile/CurrentUser';
import OtherUsers from './Profile/OtherUsers';
import Product from './Product';
import ProductCategory from './Product/Category';
import Messages from './Messages';

const BaseRoutes = {
    private: [
        {
            component: CurrentUser,
            exact: true,
            path: "/profile",
        },
        {
            component: OtherUsers,
            exact: true,
            path: "/profile/:userID",
        },
        {
            component: Messages,
            exact: true,
            path: "/message",
        },
        {
            component: Messages,
            exact: true,
            path: "/message/:sellerID",
        },
    ],
    public: [
        {
            component: Home,
            exact: true,
            path: "/",
        },
        {
            component: Signin,
            exact: true,
            path: "/signin",
        },
        {
            component: Signup,
            exact: true,
            path: "/signup",
        },
        {
            component: Product,
            exact: true,
            path: "/product/:productID",
        },
        {
            component: ProductCategory,
            exact: true,
            path: "/product",
        },
    ],
};

export default BaseRoutes;
