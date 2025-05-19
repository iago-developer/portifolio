import React from "react";
import LogoZap from "./images/logoWhatszap.png";
import LogoInsta from "./images/logoInstagram.png";

export default function Footer() {
    return(
        <footer id="contacts">
            <h2>Meus contatos</h2>
            <br />
            <hr />  
            <br />
            <div className="line-contacts">
                <a href="https://instagram.com/iago_028/" target="_blank" className="instaIcon"><img src={ LogoInsta } alt="Logo do instagram" width={50}/></a>
                <a href="https://.com/iago_028/" target="_blank" className="zapIcon"><img src={ LogoZap } alt="Logo do zap" width={56} /></a>
                {/* <a href="https://github.com/iago-developer/" target="_blank" className="zapIcon"><img src={ LogoZap } alt="Logo do zap" width={56} /></a> */}
            </div>
        </footer>
    )
}