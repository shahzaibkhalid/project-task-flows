import About from 'pages/About';
import { render } from '@testing-library/react';

describe('About.test.jsx', () => {
  test('should render', () => {
    render(<About />);
  });
});
