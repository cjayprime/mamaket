import { lazy } from 'react';

// Public route components
const Home = lazy(() => import('./Home'));
const Signin = lazy(() => import('./Signin'));
const Signup = lazy(() => import('./Signup'));

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
  ],
  private: [
  ],
};

export default routes;
