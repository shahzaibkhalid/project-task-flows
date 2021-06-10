import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'utils/routing';

function NoMatch() {
  const location = useLocation();
  return (
    <>
      <h1>It&apos;s not you, it&apos;s us!</h1>
      <h2>Seems like {location.pathname} does not exist.</h2>
      <h3>
        Go back to <Link to={routes.HOME}>Home</Link>
      </h3>
    </>
  );
}

export default memo(NoMatch);
