import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Consult from './components/Consult';
import Book from './components/Book';
import Order from './components/Order';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/consult' element={<Consult/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/' element={<Book slides={SliderData}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;