import React from "react";
import LogoZap from "./images/logoWhatszap.png";
import LogoInsta from "./images/logoInstagram.png";
import IconeGithub from "./images/iconeGithub.png";
import IconeGmail from "./images/iconeGmail.png";

export default function Footer() {
    return(
        <footer id="contacts">
            <h2>Meus contatos</h2>
            <hr />  
            <br />
            <div className="data-footer">
                <div className="title-footer">
                    <h2>MI - Developer</h2>
                </div>
                <p>Matheus Iago dos Santos Silva</p>
                <p>&copy; 2025 Matheus Iago. Todos os direitos reservados.</p>
                <p>Email para contato: <a href="mailto:matheusiago083@gmail.com" target="_blank">matheusiago083@gmail.com.</a></p>
            </div>
            <div className="line-contacts">
                <a href="https://instagram.com/iago_028/" target="_blank" className="instaIcon"><img src={ LogoInsta } alt="Logo do instagram" width={50}/></a>
                <a href="https://api.whatsapp.com/send?phone=5584996383032" target="_blank" className="zapIcon"><img src={ LogoZap } alt="Logo do zap" width={56} /></a>
            </div>
        </footer>
    )
}