function Nav() {
    return (
        <div class="container-fluid sticky-top" id="navbar-wrapper">
            <nav class="navbar navbar-expand-md">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#App"><span id="brand_span">live2cube</span></a>
                    <button class="navbar-toggler poop" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#about"><i class="bi bi-info-square-fill"></i><span> About</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact"><i class="bi bi-envelope-fill"></i><span> Contact</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/tools"><i class="bi bi-tools"></i><span> Tools</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com/code2cube/projects" target="_blank" rel="noreferrer"><i class="bi bi-file-earmark-code-fill"></i><span> Projects</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://docs.google.com/document/d/1hGmXsgbCP1VBJrpzpkwHTEtOlCaQb7qcgl5asnMcPLc/edit?usp=sharing" target="_blank" rel="noreferrer"><i class="bi bi-file-person-fill"></i><span> Resume</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;