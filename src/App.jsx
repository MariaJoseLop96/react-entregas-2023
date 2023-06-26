
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header /> 
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>} /> 
        <Route path={"/categoria/:id"} element={<ItemListContainer />} /> 
        <Route path={"/item/:id"} element={<ItemDetailContainer />} /> 
        <Route path={"/cart"} element={<Cart />} /> 

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
