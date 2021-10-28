import './style.css';
//chindren = atributo, nao esquecer
const Banner = ({children}) => { //props.children pessoa.nome
    return (
        <>
            <div className="banner">
                <h1>{children}</h1>
                <button>{children}</button>
            </div>
        </>

    );
}

export default Banner;