import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Cargos from './components/Cargos/Cargos';
import Cullote from './components/Culotte/Culotte';
import Mom from './components/Mom/Mom';
import Skinny from './components/Skinny/Skinny';
import WideStraihts from './components/Wide&Straights/Wide&Straights';
import Navbar from './components/Navbar/Navbar';
import Contacto from './components/Contacto/Contacto';
import Menu from './components/Navbar/Navbar';
import store from './components/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}> 
    <BrowserRouter>
    <Menu/>
    <Home />
    <Routes>
    <Route exact path="/">
      </Route>
      <Route path='/Home' element={<h2>Home</h2>} />
      <Route path='/' element={<h2>Salsa Jeans</h2>} />
      <Route path='/skinny' element={<Skinny/>} />
      <Route path='/mom' element={<Mom/>} />
      <Route path='/cargos' element={<Cargos/>} />
      <Route path='/wide&Straights' element={<WideStraihts/>} />
      <Route path='/culotte' element={<Cullote/>} />
      <Route path='/contacto' element={<Contacto/>} />
    </Routes>
    </BrowserRouter></Provider>
  );
}

export default App;
