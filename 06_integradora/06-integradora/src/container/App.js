import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import '../styles/App.css';
import { Fragment } from 'react';

function App() {

  let convidados = [
    {
      id: 0,
      nome: 'Carol',
      estaNaLista: true,
      tarefa: 'brigadeiro'
    },
    {
      id: 1,
      nome: 'Renata',
      estaNaLista: true,
      tarefa: 'bolinha de queijo'
    },
    {
      id: 2,
      nome: 'Clarissa',
      estaNaLista: true,
      tarefa: 'beijinho'
    },
    {
      id: 3,
      nome: 'Helena',
      estaNaLista: false,
      tarefa: 'cerveja'
    }
  ]
  return (

    <div className="App">
      <h3>Convidadas:</h3>
      {
        convidados.map((convidado) => {
          return (
            <Fragment key={convidado.id}>
              <ClassComponent nome={convidado.nome} estaNaLista={convidado.estaNaLista} />
            </Fragment>
          )
        })
      }

      <h3>Tarefas: </h3>
      {
        convidados.map((convidado) => {
          return (
            <Fragment key={convidado.id}>
              <FunctionComponent nome={convidado.nome} tarefa={convidado.tarefa}  />
            </Fragment>
          )
        })

      }

      {/* 
  <ClassComponent nome="Nicolas" estaNaLista={true} />
  <ClassComponent nome="Pedro" estaNaLista={false} />
  <ClassComponent nome="Carolina" estaNaLista={true} />
  <h3>Tarefas: </h3>
  <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
  <FunctionComponent nome="Pedro" tarefa="pizza" />
  <FunctionComponent nome="Carolina" tarefa="bebidas" /> */}
    </div>

 );
}

export default App;