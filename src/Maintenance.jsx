import facebookLogo from '/img/facebook.svg'
import youtubeLogo from '/img/youtube.svg'
import instagramLogo from '/img/instagram.svg'
import contactLogo from '/img/mail.svg'
import logoXtremeAcademy from '/img/logo-xtreme-academy.png'
import './Maintenance.css'

export default function Maintenance() {
    return <>
        <div className="logo">
            <img src={logoXtremeAcademy} alt="Logo Xtreme Academy" />
        </div>
        <div className="maintenance-container">
            <h1>Nous sommes en maintenance</h1>
            <h2>Toutes nos équipes sont sur le pont pour vous proposer une nouvelle version du site.</h2>
            <p>
                En attendant, retrouvez l&apos;ensemble de notre actualité sur nos réseaux sociaux.
                Les prochains événements seront annoncés très prochainement.
            </p>
            <div className="reseaux-sociaux">
                <a href="mailto:contact@xtreme-academy.com" target="_blank" title="Nous contacter par mail" rel="noreferrer">
                    <img src={contactLogo} alt="Contact Xtreme Academy" />
                </a>

                <a href="https://www.facebook.com/Xtreme.Academy.France" target="_blank" title="Notre page Facebook" rel="noreferrer">
                    <img src={facebookLogo} alt="Facebook Xtreme Academy" />
                </a>

                <a href="https://www.instagram.com/xtreme_academy_event/" target="_blank" title="Notre page Instagram" rel="noreferrer">
                    <img src={instagramLogo} alt="Instagram Xtreme Academy" />
                </a>

                <a href="https://www.youtube.com/channel/UCX1BN2fAuYyanBLw0rD3jYw" target="_blank" title="Notre chaîne YouTube" rel="noreferrer">
                    <img src={youtubeLogo} alt="YouTube Xtreme Academy" />
                </a>
            </div>
        </div>
    </>
}
