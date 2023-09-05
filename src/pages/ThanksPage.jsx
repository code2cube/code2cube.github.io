import '../App.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ThanksPage() {

    document.title = "Thanks | Samuel Sharivker"

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        window.confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio)
        }));
      }

      function lmao() {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
          });
          fire(0.2, {
            spread: 60,
          });
          fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
          });
          fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
          });
          fire(0.1, {
            spread: 120,
            startVelocity: 45,
          });
      }

    return (
        <div id="App">
            <Nav />
            <div className="container-fluid text-center" id="thanks">
                <h1 class="display-1 home-text" onMouseEnter={lmao}>Thank You For Sending a Message!</h1>
                <h6 class="display-6 home-text"><Link id="thanks-return" to="/" onClick={scrollToTop}>Return Home</Link></h6>
            </div>
            <Footer />
        </div>
    );
}

export default ThanksPage;