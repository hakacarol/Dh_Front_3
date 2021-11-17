import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ceps: {}
    }
  }

  // async componentDidMount() {
  //   this.handleSubmit({cepUsuario: '06709320'});
  // }


  handleSubmit = async ({ cepUsuario }) => {
    try {
      const response = await api.get(`/${cepUsuario}`);
      this.setState({ ceps: response.data });
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }


  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um CEP:</h2>
            <Formik initialValues={{ cepUsuario: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cepUsuario" id="cepUsuario" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.ceps && (
              <div id="dadosCep">
                <p>CEP: {this.state.ceps.cep}</p>
                <p>Estado: {this.state.ceps.state}</p>
                <p>Cidade: {this.state.ceps.city}</p>
                <p>Bairro: {this.state.ceps.neighborhood}</p>
                <p>Logradouro: {this.state.ceps.street}</p>
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
}
