import '../App.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ThanksPage() {

    document.title = "Error: 404 | Samuel Sharivker"

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id="App">
            <Nav />
            <div className="container-fluid text-center" id="no-page">
                <h1 class="display-1 home-text">Error: 404! This Page Does Not Exist!</h1>
                <h6 class="display-6 home-text"><Link id="thanks-return" to="/" onClick={scrollToTop}>Return Home</Link></h6>
            </div>
            <Footer />
        </div>
    );
}

export default ThanksPage;