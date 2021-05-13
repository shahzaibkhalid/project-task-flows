import Footer from 'components/Footer';
import Surface from 'static/surface.jpg';

function About() {
  return (
    <div>
      <h1 className='some'>this is our About page!</h1>
      <h2>This is h2</h2>
      <img src={Surface} alt='surface' />
      <Footer copy='This is footer' />
    </div>
  );
}

export default About;
