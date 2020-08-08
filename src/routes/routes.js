import { lazy } from 'react';

// Public routes components
const Home = lazy(() => import('./Home'));

const routes = {
  public: [
    {
      path: "/",
      exact: true,
      component: Home,
    },
  ],
  private: [
  ],
};

export default routes;
