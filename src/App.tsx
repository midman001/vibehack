import Hero from './components/Hero';
import Mission from './components/Mission';
import Timeline from './components/Timeline';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Mission />
      <Timeline />
      <Toolkit />
      <Footer />
    </div>
  );
}

export default App;
