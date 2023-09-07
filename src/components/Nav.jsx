import { Link } from 'react-router-dom';

function Nav() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const isActiveLink = (pathname) => {
        return window.location.pathname === pathname ? 'active' : '';
    };

    return (
        <div class="container-fluid sticky-top" id="navbar-wrapper">
            <nav class="navbar navbar-expand-md">
                <div class="container-fluid">
                    <Link className={`navbar-brand ${isActiveLink('/')}`} to="/" onClick={scrollToTop}><span id="brand_span">live2cube</span></Link>
                    <button class="navbar-toggler poop" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className={`nav-link ${isActiveLink('/about')}`} to="/about" onClick={scrollToTop}><i class="bi bi-info-square-fill"></i><span> About</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className={`nav-link ${isActiveLink('/contact')}`} to="/contact" onClick={scrollToTop}><i class="bi bi-envelope-fill"></i><span> Contact</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="https://www.linkedin.com/in/samuel-sharivker-74158028b/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i><span> Linkedin</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;