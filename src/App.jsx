
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    <Header /> 
   <NavBar/>
   <ItemListContainer/>
   <Footer />
   
   
    </div>
  );
}

export default App;
