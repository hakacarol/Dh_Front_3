import './style.css';

const Footer = ({empresa}) => { 
    return(
        <footer>
            <h4>{empresa.nome}</h4> 
        </footer>
    )
}

export default Footer