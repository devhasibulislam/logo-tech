import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import TeamSlider from './components/TeamSlider';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  return (
    <section>
      <Banner />
      <Services />
      <Experience />
      <Portfolio />
      <TestimonialSlider />
      <TeamSlider />
      <Footer />
    </section>
  );
}

export default App;
