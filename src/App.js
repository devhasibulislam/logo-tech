import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  return (
    <section>
      <Banner />
      <Services />
      <Experience />
      <Portfolio />
      <TestimonialSlider />
    </section>
  );
}

export default App;
