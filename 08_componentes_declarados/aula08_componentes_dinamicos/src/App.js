import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0
    };
  }
  render() {

    const somaUm = () => {
      this.setState({
        valor: this.state.valor + 1
      });
    }

    return (
      <>
        {/* Incremental */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          <h2>{this.state.valor}</h2>
          <button className="btn btn-primary" onClick={somaUm}>Soma um</button>
        </div>
      </>
    )
  }
}
