import React from "react";
import ProfileImage from "./images/profile.jpg";
import Project01 from "./images/cinetec.png";
import Project02 from "./images/gitL.png";
import Project03 from "./images/nexuschat.png";
import LogoCineTec from "./images/logoCineTec.jpg";
import LogoGitL from "./images/logoGitL.png";

export default function Main() {
    return(
        <main>
            <section id="home">
                <article>
                    <h2>Olá, eu me chamo Matheus Iago.</h2>
                    <br />
                    <p>Desenvolvo aplicações web e o meu intuito é entregar interfaces limpas e agradáveis aos meus clientes.</p>
                </article>
                <div className="button-home"><a href="#projects">Meus Projetos</a></div>
            </section>
            <br />
            <section id="about">
                <article>
                    <h2>Um pouco sobre mim...</h2>
                    <br />
                    <ul>
                        <li>Sou da cidade de Mossoró - RN.</li>
                        <li>Tenho 19 anos de idade.</li>
                        <li>Pretendo me tornar um desenvolvedor full-stack.</li>
                        <li>Atualmente curso Tecnologia em Sistemas para Internet.</li>
                        <li>Sou fanático por tecnologia e gosto bastante da área do turismo e da gastronomia.</li>
                    </ul>
                </article>
                    <div className="image-about"><img src={ ProfileImage } alt="profile." /></div>
            </section>
            <section id="technologies">
                <h2>Tecnologias que estudei.</h2>
                <br />
                <br />
                <div className="table-technologies">
                    <div className="technology">
                        <span className="title-technology">
                            <h3>ReactJS</h3>
                        </span>
                        <img src="" alt="Logo do React" />
                    </div>
                    <div className="technology">
                        <span className="title-technology">
                            <h3>HTML 5</h3>
                        </span>
                        <img src="" alt="Logo do HTML 5" />
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2>Meus Projetos.</h2>
                <br />
                <br />
                <div className="table-projects">
                    <div className="project">
                        <span className="title-project">
                            <img src={ LogoCineTec } alt="logo do Cine Tec." />
                            <br />
                            <h3>Site de cinema</h3>
                            <h3>Cine Tec.</h3>
                        </span>
                        <img src={ Project01 } alt="CineTec" />
                    </div>
                    <div className="project">
                        <span className="title-project">
                            <img src={ LogoGitL } alt="logo do Git Learning." />
                            <br />
                            <h3>App guia de estudos</h3>
                            <h3>Git Learning.</h3>
                        </span>
                        <img src={ Project02 } alt="Nexuschat" />
                    </div>
                    <div className="project">
                        <span className="title-project">
                            <h3>Chat para Bate Papo</h3>
                            <h3>NexusChat.</h3>
                        </span>
                        <img src={ Project03 } alt="Nexuschat" />
                    </div>
                </div>
            </section>
            <section id="contacts">
                <article>
                </article>
            </section>
        </main>
    )
}