import { lazy } from 'react';

// Public route components
const Home = lazy(() => import('./Home'));
const Signin = lazy(() => import('./Signin'));
const Signup = lazy(() => import('./Signup'));
const Advertisement = lazy(() => import('./Profile/Advertisement'));

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
    // TODO: move this to private routes section
    {
      path: "/profile/advertisement",
      exact: true,
      component: Advertisement,
    },
  ],
  private: [
  ],
};

export default routes;
