import Footer from './components/footer/Footer';
import Topbar from './components/navbar/Topbar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import { Routes, Route} from "react-router-dom";
import Faculty from './pages/faculty/Faculty';
import Gallery from './pages/gallery/Gallery';
import Campuses from './pages/campus/Campuses';
import Admissions from './pages/admission/Admissions';
import Dept from './components/department/Dept';

function App() {
  return (
    <div>
      <Topbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/faculty' element={<Faculty/>}/>
      <Route exact path='/gallery' element={<Gallery/>}/>
      <Route exact path='/campuses' element={<Campuses/>}/>
      <Route exact path='/admissions' element={<Admissions/>}/>
      <Route exact path='/faculty/:deptname' element={<Dept/>}/>
      <Route path="*" element={<Home />} />
    </Routes>
      <Footer/>
    </div>
  
  );
}

export default App;
