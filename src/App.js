
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         
   <Header />

      <Routes>

<Route path='/' element={<HomePage />} />

      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
