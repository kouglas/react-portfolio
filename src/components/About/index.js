import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)
    
    return (
        <>
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I am a freelance developer. I have been working in the software industry since 
                2019 mainly focusing on web application development. 
                I have 2 years of experience with development utilizing modern web frameworks 
                and I've worked on several projects for companies of all size, from startup 
                businesses to well established firms.
                </p>
                <p>
                My primary skill set for development includes Javascript, HTML, and CSS.
                </p>
                <p>
                Over the last 2 years, I've been primarily working on hybrid application development, with an emphasis React.js, css, and html with deployment using services likeFirebase 
                </p>


            </div>

            <div className='stage-cube-cont'>
                <div className='cubeSpinner'>
                    <div className='face1' >
                        <FontAwesomeIcon icon={faReact} color="#61dafb" />
                    </div>
                    <div className='face2' >
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3' >
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4' >
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5' >
                        <FontAwesomeIcon icon={faSass} color="#D06DA1" />
                    </div>
                    <div className='face6' >
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />

        </>
    )
}


export default About