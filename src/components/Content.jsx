import meIMG from '../img/me.png';
import Experience from './Experience';
import Form from './Form';
import Footer from './Footer';

function Content() {
    return (
        <div>
            <div className="container-fluid text-center" id="home">
                <h1 class="display-1 home-text">Samuel Sharivker</h1>
                <h6 class="display-6 home-text">Professional Human</h6>
            </div>
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
                    <div className="text-center">
                        <a href="https://www.youtube.com/channel/UCUWwHjno1Jeyt7H0JCZcvlw?sub_confirmation=1" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-youtube skills-icons"></i></a>
                        <a href="https://discord.com/invite/NbhpNp6h4q" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-discord skills-icons"></i></a>
                        <a href="https://www.worldcubeassociation.org/persons/2018SHAR52" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-box skills-icons"></i></a>
                        <a href="https://www.instagram.com/live2cube" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-instagram skills-icons"></i></a>
                        <a href="https://www.twitch.tv/live2cube" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-twitch skills-icons"></i></a>
                        <a href="https://github.com/code2cube" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-github skills-icons"></i></a>
                        <a href="mailto:sjsharivker@hotmail.com" target="_blank" rel="noreferrer"><i class="ms-1 bi bi-envelope-fill skills-icons"></i></a>
                    </div>
                    <hr className=""></hr>
                    <Experience />
                </div>
                </div>
            </div>
            </div>
            </div>
            <div className="container-fluid text-center" id="contact">
                <Form />
            </div>
            <Footer />
        </div>
    );
}

export default Content;