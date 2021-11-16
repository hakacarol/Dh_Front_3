import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.scss';

export default class App extends Component {

  nomeEmpresa = 'CH.checkpoints';

  render() {
    return (
      <>
        <Header empresa={this.nomeEmpresa}/>
        <Banner/>
        <Galeria/>
        <Footer empresa={this.nomeEmpresa}/>
      </>
    );
  }
}