import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Main() {

    document.title = "Home | Samuel Sharivker"

    return (
        <div id="App">
            <Nav />
            <div className="container-fluid text-center" id="home">
                <h1 class="display-1 home-text">Samuel Sharivker</h1>
                <h6 class="display-6 home-text">Professional Human</h6>
            </div>
            <Footer />
        </div>
    );
}

export default Main;