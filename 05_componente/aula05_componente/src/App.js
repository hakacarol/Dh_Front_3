import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const empresa = {
    nome: "Minha empresa",
    cnpj: "6546545465"
  }
  return (
    <div className="App">
      <Header/>
      // props.children
      <Banner>Frutas</Banner>
      // props 
      <Footer banana={empresa} ></Footer>
    </div>
  );
}

export default App;