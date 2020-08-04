// Public routes components
import Home from "./Home";

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
