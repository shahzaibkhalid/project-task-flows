import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from 'containers/App';

const container = document.getElementById('app');
Modal.setAppElement(container);

ReactDOM.render(<App />, container);
