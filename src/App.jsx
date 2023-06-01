
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    <Header /> 
   <NavBar/>
   <ItemListContainer/>
   <ItemDetailContainer />
   <Footer />
   
   
    </div>
  );
}

export default App;
