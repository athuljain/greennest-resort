
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ViewDetails from './components/ViewDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         
   <Header />

      <Routes>

<Route path='/' element={<HomePage />} />
<Route path='/about' element={<AboutPage />} />
<Route path='//services' element={<Services />}/>
<Route path='gallery' element={<Gallery />}/>
<Route path='/booking' element={<Booking />}/>
<Route path='/contact' element={<ContactPage />}/>
<Route path='/services/:serviceId' element={<ViewDetails />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
