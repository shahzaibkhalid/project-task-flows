import NotMatch from 'components/NoMatch';
import About from 'pages/About';
import Home from 'pages/Home';

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
