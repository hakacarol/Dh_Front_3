import './style.css';

const Header = () => {
    return(
        <header id="header">
            <div className="logo">
                <img src="https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C228-256.png" alt="logo_donut" />
                <h2>DOG & COFFEE.shop</h2>
            </div>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Menu</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

// sem o default funciona...
export default Header