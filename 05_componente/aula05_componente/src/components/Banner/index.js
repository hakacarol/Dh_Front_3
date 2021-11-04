import './style.css';
//chindren = atributo, nao esquecer
//props.children pessoa.nome
const Banner = ({ children }) => {
    return (
        <>
            <div id="background">
                <div id="banner">
                    <h1>{children}</h1>
                    <button><a href="https://www.youtube.com/embed/B8ITj4UYgcU">TOMAR UM CAUFÉ</a></button>
                </div>
            </div>
        </>

    );
}

export default Banner;