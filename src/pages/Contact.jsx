import Nav from '../components/Nav';
import Form from '../components/Form';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div>
            <Nav />
            <div className="container-fluid text-center" id="contact">
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;