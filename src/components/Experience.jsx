import React, { useEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Experience() {
    useEffect(() => {
        tippy('#html-icon', {
            content: 'HTML',
        });

        tippy('#css-icon', {
            content: 'CSS',
        });

        tippy('#boot-icon', {
            content: 'Bootstrap',
        });

        tippy('#git-icon', {
            content: 'Git',
        });

        tippy('#nodejs-icon', {
            content: 'JavaScript',
        });

        tippy('#electron-icon', {
            content: 'ElectronJS',
        });

        tippy('#react-icon', {
            content: 'ReactJS',
        });

        tippy('#unity-icon', {
            content: 'Unity',
        });

        tippy('#python-icon', {
            content: 'Python',
        });

        tippy('#sqlite-icon', {
            content: 'SQL',
        });

        tippy('#md-icon', {
            content: 'Markdown',
        });
    }, []);

    return (
        <div>
            <h4 class="card-text text-center">Experience with...</h4>
            <div className="text-center">
                <i class="ms-1 devicon-html5-plain skills-icons" id="html-icon"></i>
                <i class="ms-1 devicon-css3-plain skills-icons" id="css-icon"></i>
                <i class="ms-1 devicon-bootstrap-plain skills-icons" id="boot-icon"></i>
                <i class="ms-1 devicon-git-plain skills-icons" id="git-icon"></i>
                <i class="ms-1 devicon-nodejs-plain skills-icons" id="nodejs-icon"></i>
                <i class="ms-1 devicon-electron-original skills-icons" id="electron-icon"></i>
                <i class="ms-1 devicon-react-original skills-icons" id="react-icon"></i>
                <i class="ms-1 devicon-unity-original skills-icons" id="unity-icon"></i>
                <i class="ms-1 devicon-python-plain skills-icons" id="python-icon"></i>
                <i class="ms-1 devicon-sqlite-plain skills-icons" id="sqlite-icon"></i>
                <i class="ms-1 devicon-markdown-original skills-icons" id="md-icon"></i><br></br>
            </div>
        </div>
    );
}

export default Experience;