import { Spinner } from '@theme-ui/components';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from 'utils/routing';

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </Router>
  );
}

export default Routes;
