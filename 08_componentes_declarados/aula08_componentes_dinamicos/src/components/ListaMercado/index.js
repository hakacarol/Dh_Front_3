import { Component } from 'react';
import './style.css';

export default class ListaMercado extends Component {

    listaProdutos = [
        {
            id: 0,
            nomeProduto: "Chocolate",
            imagemProduto: "https://bit.ly/3q4AjSJ"
        },
        {
            id: 1,
            nomeProduto: "Queijo",
            imagemProduto: "https://bit.ly/2ZS6E4b"
        },
        {
            id: 2,
            nomeProduto: "Cerveja",
            imagemProduto: "https://bit.ly/3mLcCwF"
        },
        {
            id: 3,
            nomeProduto: "Água",
            imagemProduto: "https://bit.ly/3ENhzLt"
        },
        {
            id: 4,
            nomeProduto: "Pão",
            imagemProduto: "https://bit.ly/3mN75Wj"
        },

    ];

    constructor() {
        super();
        this.state = {
            listaCompras: this.listaProdutos
        };
    }

    removerProduto = (idProduto) => {
        const listaNova = this.state.listaCompras.filter(({ id }) => {
            return id !== idProduto
        });

        this.setState({
            listaCompras: listaNova
        })
    }

    restaurar = () => {
        this.setState({
            listaCompras: this.listaProdutos
        })
    }

    render() {
        return (
            <> 
                <button onClick={() => this.restaurar()}>Restaurar</button>
                {
                    this.state.listaCompras.map(({ id, nomeProduto, imagemProduto }) => {
                        return (
                            <div id="produto" key={id} onClick={() => this.removerProduto(id)}>
                                <h3>{nomeProduto}</h3>
                                <img src={imagemProduto} alt={nomeProduto} />
                            </div>
                        )
                    })
                    
                }
                
            
            </>
        )
    }
}