import profile from "/images/BEN.jpg"

export default function Header() {
    return (
        <div className="header">
            <img src={profile} alt="profile" className="profile-picture"></img>
            <div className="titles">
                <h2 className="name">Benson Njuguna</h2>
                <h4 className="position">front-end Developer</h4>
                <h6><a href="https://www.linkedin.com/in/benson-njuguna-008146242/" className="link">LinkedIn</a></h6>
            </div>
            <div className="buttons">
                <button className="email">
                    <a href="mailto: njugunab655@gmail.com">
                        <i class="fa fa-envelope" aria-hidden="true"></i> Email
                    </a>
                </button>

                <button className="linkedin">
                    <a href="https://www.linkedin.com/in/benson-njuguna-008146242/">
                        <i class="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                </button>
            </div>
        </div>
    )
}