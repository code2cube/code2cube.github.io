import '../App.css';
import Nav from '../components/Nav';
import meIMG from '../img/me.png';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

function About() {

    document.title = "About | Samuel Sharivker"

    return (
        <div id="App">
            <Nav />
            <div className="container-fluid" id="about">
            <div class="card mb-3 lol">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={meIMG} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title text-center">About Me</h1>
                    <main>
                        <p class="card-text">I am a developer who enjoys maintaining code and servers and who also says random philosophical stuff. I started coding in early 2022 after getting annoyed that a discord bot known as Mee6 was charging almost $90 for practical features. I then started developing discord bots in Python which got me more interested in coding. I then started working on other projects and learning additional programming languages such as Javascript and C# using Unity Game Engine. Even though most of my projects are just for fun, in December 2022, I participated in Snow Codes Bot Jam and coded a discord bot that placed 7th overall. Other than coding I also enjoy playing games such as Minecraft and Valorant. I also enjoy debating and have participated in debate conferences with my school such as CESIMS, located at Columbia University. I also have been solving Rubik's Cubes for over 5 years.</p>
                    </main>
                    <hr className=""></hr>
                    <Experience />
                </div>
                </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;