import React, {useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Links() {

    document.title = "Links | Samuel Sharivker"

    const myMail = "sam@samuelsharivker.com";
    const [copied, setCopied] = useState(false);

    return (
        <div id="App">
            <Nav />
            <div className="container-fluid text-center" id="links-page">
                <div className="row link-container">
                    <div className="col-md-12 link-wrapper">
                        <CopyToClipboard text={myMail} onCopy={() => setCopied(true)}>
                            <p>Mail</p>
                        </CopyToClipboard>
                        {copied ? alert("Mail has beeen Copied!"): null}
                    </div>
                    <div className="col-md-12 link-wrapper">
                        <a href="https://github.com/code2cube" target="_blank" rel="noreferrer"><p>Github</p></a>
                    </div>
                    <div className="col-md-12 link-wrapper">
                        <a href="https://www.twitch.tv/live2cube" target="_blank" rel="noreferrer"><p>Twitch</p></a>
                    </div>
                    <div className="col-md-12 link-wrapper">
                        <a href="https://www.youtube.com/channel/UCUWwHjno1Jeyt7H0JCZcvlw?sub_confirmation=1" target="_blank" rel="noreferrer"><p>YouTube</p></a>
                    </div>
                    <div className="col-md-12 link-wrapper">
                        <a href="https://www.instagram.com/live2cube" target="_blank" rel="noreferrer"><p>Instagram</p></a>
                    </div>
                    <div className="col-md-12 link-wrapper">
                        <a href="https://www.worldcubeassociation.org/persons/2018SHAR52" target="_blank" rel="noreferrer"><p>WCA Profile</p></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Links;