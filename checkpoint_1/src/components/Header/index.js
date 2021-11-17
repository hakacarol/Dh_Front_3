/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({ empresa }) => {

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top" aria-label="Second navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{empresa}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#background">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeria">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;