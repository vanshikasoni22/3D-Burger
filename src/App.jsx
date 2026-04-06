import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Specials from './components/Specials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Specials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
