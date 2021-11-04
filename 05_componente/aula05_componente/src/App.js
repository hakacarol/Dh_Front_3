import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const empresa = {
    nome: "dog&coffee.shop",
  }
  return (
    <div className="App">
      <Header/>
      {/*props.children */}
      <Banner>Bora tomar um cafézin?</Banner>
      {/* props  */}
      <Footer empresa={empresa} ></Footer>
    </div>
  );
}

export default App;
