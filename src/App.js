import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Support from './components/Support';
import Sopnsers from './components/Sopnsers';
import Speakers from './components/Speakers';
import Community from './components/Community';
import Organisers from './components/Organisers';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <About/>
      <Tracks/>
      <Prizes/>
      <Support/>
      <Sopnsers/>
      <Speakers/>
      <Community/>
      <Organisers/>
      <Footer/>
     
    </div>
  );
}

export default App;


