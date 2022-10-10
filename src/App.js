import Footer from './components/footer/Footer';
import Topbar from './components/navbar/Topbar';
import About from './pages/about/About';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Topbar/>
      {/* <Home/> */}
      <About/>
      <Footer/>
    </div>
  
  );
}

export default App;
