import { Component } from 'react';
import dog_coffee from './dog_coffee.png';
import oh_my_tasks from './oh_my_tasks.png';
import card_stock from './card_stock.png';
import './style.scss';

export default class Galeria extends Component {

    listaProjetos = [
        {
            id: 1,
            imgProjeto: oh_my_tasks,
            nomeProjeto: "OhMyTasks",
            descricao: "Controle de tarefas - Trabalho feito em grupo",
            linkGithub: "https://github.com/helenaperdigueiro/CheckpointIIFrontEndII",
            linkSite: "https://helenaperdigueiro.github.io/CheckpointIIFrontEndII/"
        },
        {
            id: 2,
            imgProjeto: card_stock,
            nomeProjeto: "CardStock",
            descricao: "Guarde suas imagens favoritas aqui!",
            linkGithub: "https://github.com/hakacarol/Dh_Front_2/tree/main/Checkpoint_1_Individual",
            linkSite: "https://hakacarol.github.io/Dh_Front_2/Checkpoint_1_Individual/"
        },
        {
            id: 3,
            imgProjeto: dog_coffee,
            nomeProjeto: "Dog & Coffee.shop",
            descricao: "Meu primeiro projeto com React JS :)",
            linkGithub: "https://github.com/hakacarol/Dh_Front_3/tree/main/05_componente/aula05_componente",
            linkSite: "https://dh-front-3-aula-05-renaaaata.vercel.app/"
        },
    ];

    render() {
        return (

            <div id="galeria">
                <h2>PROJETOS</h2>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                this.listaProjetos.map(({ id, imgProjeto, nomeProjeto, descricao, linkGithub, linkSite }) => {
                                    return (
                                        <div key={id} className="col">
                                            <div className="card shadow-sm">
                                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={imgProjeto} alt="imagem" /><rect width="100%" height="100%" fill="#55595c"></rect><text id="nomeProjeto" x="50%" y="50%" fill="#eceeef" dy=".3em">{nomeProjeto}</text>

                                                <div className="card-body">
                                                    <p className="descricao">{descricao}</p>
                                                    <div id="buttons" className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <a href={linkGithub}><button type="button" className="btn btn-sm btn-outline-secondary px-md-3">GitHub</button></a>
                                                            <a href={linkSite}><button type="button" className="btn btn-sm btn-outline-secondary px-md-3">Página</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

