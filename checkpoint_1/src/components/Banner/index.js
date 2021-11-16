import './style.scss';

const Banner = ({ children }) => {
    return (
        <div id="background">
            <div id="container">
                <div class="primeiracoluna">
                </div>

                <div class="segundacoluna">
                    <h3>Hello Word!</h3>
                    <h5>Carolina Hakamada</h5>
                    <p>Estudante Certified Tech Developer da Digital House</p>
                    <p>>_sendo feliz estudando programação</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;