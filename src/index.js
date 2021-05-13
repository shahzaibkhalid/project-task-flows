import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import About from 'pages/About';

function App() {
  return (
    <Fragment>
      <About />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
