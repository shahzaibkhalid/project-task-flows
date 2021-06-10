import { lazy } from 'react';

const NotMatch = lazy(() =>
  import(
    /* webpackChunkName: 'NotMatch' */
    'components/NoMatch'
  )
);
const About = lazy(() =>
  import(
    /* webpackChunkName: 'About' */
    /* webpackPrefetch: true */
    'pages/About'
  )
);
const Home = lazy(() =>
  import(
    /* webpackChunkName: 'Home' */
    'pages/Home'
  )
);

const routes = {
  ABOUT: '/about',
  HOME: '/',
};

function getRoutes() {
  return [
    {
      component: About,
      path: routes.ABOUT,
    },
    {
      component: Home,
      exact: true,
      path: routes.HOME,
    },
    {
      component: NotMatch,
      path: '*',
    },
  ];
}

export { routes, getRoutes };
