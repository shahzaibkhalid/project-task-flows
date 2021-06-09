import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from 'utils/routing';

function Routes() {
  return (
    <Router>
      <Switch>
        {getRoutes().map(({ path, component, ...rest }) => {
          const PageRootComponent = component;
          return (
            <Route path={path} key={path} {...rest}>
              <PageRootComponent />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default Routes;
