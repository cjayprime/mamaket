import { lazy } from 'react';

// Public route components
const Home = lazy(() => import('./Home'));
const Signin = lazy(() => import('./Signin'));
const Signup = lazy(() => import('./Signup'));
const CurrentUser = lazy(() => import('./Profile/CurrentUser'));
const OtherUsers = lazy(() => import('./Profile/OtherUsers'));
const Product = lazy(() => import('./Product'));
const Message = lazy(() => import('./Message'));

const routes = {
  public: [
    {
      path: "/",
      exact: true,
      component: Home,
    },
    {
      path: "/signin",
      exact: true,
      component: Signin,
    },
    {
      path: "/signup",
      exact: true,
      component: Signup,
    },
    // TODO: move all below this to private routes section
    {
      path: "/profile",
      exact: true,
      component: CurrentUser,
    },
    {
      path: "/profile/:user",
      exact: true,
      component: OtherUsers,
    },
    {
      path: "/product/:productID",
      exact: true,
      component: Product,// This page should mirror User, with the SOLE difference that it simply opens a product!
    },
    {
      path: "/messages",
      exact: true,
      component: Message,
    },
    {
      path: "/messages/:user",
      exact: true,
      component: Message,
    },
  ],
  private: [
  ],
};

export default routes;
