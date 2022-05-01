import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faFile, faHome, faNoteSticky, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS}  alt="logo" />
        </Link>
        <nav> 
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>   
        </nav>
        <ul>
            <li>
                <a target="_blank"
                rel='noreferrer'
                href ="https://www.linkedin.com/in/karidouglas/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                rel='noreferrer'
                href ="https://github.com/kouglas">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                rel='noreferrer'
                href ="https://docs.google.com/document/d/e/2PACX-1vTelg3cZV4wmifoTX317BakUSfPPo_sabMPlG_1OdOou8WziyCgDVTZjFeMjkB9gjSNSNHk7_89V4n2/pub">
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                </a>
            </li>
            

        </ul>
    </div>
)

export default Sidebar