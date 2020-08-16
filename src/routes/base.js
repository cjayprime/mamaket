import { lazy } from 'react';

// Public route components
const Home = lazy(() => import('./Home'));
const Signin = lazy(() => import('./Signin'));
const Signup = lazy(() => import('./Signup'));
const CurrentUser = lazy(() => import('./Profile/CurrentUser'));
const OtherUsers = lazy(() => import('./Profile/OtherUsers'));
const Product = lazy(() => import('./Product'));
const Messages = lazy(() => import('./Messages'));

const BaseRoutes = {
    private: [
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
        // TODO: move all below this to private routes section
        {
            component: CurrentUser,
            exact: true,
            path: "/profile",
        },
        {
            component: OtherUsers,
            exact: true,
            path: "/profile/:user",
        },
        {
            component: Product,
            exact: true,
            path: "/product/:productID",// This page should mirror User, with the SOLE difference that it simply opens a product!
        },
        {
            component: Messages,
            exact: true,
            path: "/messages",
        },
        {
            component: Messages,
            exact: true,
            path: "/messages/:user",
        },
    ],
};

export default BaseRoutes;
