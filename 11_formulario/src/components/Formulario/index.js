import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

// input que irá colocar seu nome.
// input que irá colocar seu telefone.
// input que irá colocar seu email.
// Ao enviar, deve exibir os dados do Formik no SweetAlert.

export default class Formulario extends Component {
  handleSubmit = ({ nome, email, telefone }) => {
    if (nome === '' && email === '' && telefone === '') {
      Swal.fire({
        title: "'Aconteceu um erro'",
        icon: 'error',
        text: 'Ih rapaz, escreve direito'
      })
    }
    else {
      console.log(nome);
      Swal.fire({
        title: 'Parabéns,' + nome,
        icon: 'success',
        text: 'Enviaremos mais notícias ao seu email, ' + email
      })
    }
  }

  render() {
    return (
      <div id="formulario" className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center">
        <Formik initialValues={{ nome: '', email:'', telefone:'' }} onSubmit={this.handleSubmit}>
          <Form>
            <Field className="form-control" type="text" id="nome" name="nome" placeholder="Nome completo"/>
            {/* <Field className="form-control" type="number" id="number" name="number" /> */}
            <Field className="form-control" type="email" name="email" placeholder="Email"/>
            <Field className="form-control" type="text" id="telefone" name="telefone" placeholder="Celular"/>
            <button className="btn btn-primary my-3" type="submit">Enviar</button>
          </Form>
        </Formik>
      </div>
    )
  }
}