import { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      cronometroTempo: 60,
    };    
  }

  componentDidMount() {
    this.tempoId = setInterval(() => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.cronometroTempo === 0){
        clearInterval(this.tempoId)
    }
  }

  tick = () => {
    this.setState({ 
      cronometroTempo: this.state.cronometroTempo - 1 
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.cronometroTempo}</h2>
      </div>
    );
  }
}