
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
   <Header />
   <ItemListContainer  greeting={"pagina en desarollo"} />
   <Footer />
   
    </div>
  );
}

export default App;
