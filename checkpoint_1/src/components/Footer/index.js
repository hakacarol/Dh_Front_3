import './style.scss';

const Footer = ({ empresa }) => {
    const generateDateString = () => {
        const creation = "2021";
        const current = `${new Date().getFullYear()}`;
        return creation === current ? current : `${creation} - ${current}`;
    }

    return (
        <footer id="footer">
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            {/* <img class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></img> */}
                        </a>
                        <span class="text-muted">{empresa} &copy;Copyright {generateDateString()}</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex ">
                        <li class="ms-3"><a href={"https://www.linkedin.com/in/hakacarolina/"}><img width="28" height="28" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png" alt="linkedin" /></a></li>
                        <li class="ms-3"><a href={"https://github.com/hakacarol"}><img width="28" height="28" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" /></a></li>
                        <li class="ms-3"><a href={"mailto:haka.carolina@gmail.com"}><img width="28" height="28" src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Mail-2-512.png" alt="email" /></a></li>
                    </ul>
                </footer>
            </div>
        </footer>
    )
}

export default Footer;