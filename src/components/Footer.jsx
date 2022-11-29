import twitter from "/home/bennyjoezpop/Documents/coding/react/scrimba/digital-business-card/src/images/Twitter Icon.png"
import facebook from "/home/bennyjoezpop/Documents/coding/react/scrimba/digital-business-card/src/images/Facebook Icon.png"
import instagram from "/home/bennyjoezpop/Documents/coding/react/scrimba/digital-business-card/src/images/Instagram Icon.png"
import github from "/home/bennyjoezpop/Documents/coding/react/scrimba/digital-business-card/src/images/GitHub Icon.png"


export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/bennyjoezz" target="_blank">
                <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/benson-njuguna-008146242/" target="_blank">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/benson-njuguna-008146242/" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://github.com/Bennyjoez" target="_blank">
                <img src={github} alt="GitHub" />
            </a>
        </footer>
    )
}