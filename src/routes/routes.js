import { lazy } from 'react';

// Public route components
const Home = lazy(() => import('./Home'));
const Signin = lazy(() => import('./Signin'));

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
  ],
  private: [
  ],
};

export default routes;
