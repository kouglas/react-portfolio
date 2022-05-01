import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react'
import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)
    
    

    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('service_d9494xo', 'template_udqf0xj', refForm.current, 'ueOhEAbLtAm9Ymgbo')
        .then(
            () => {
            alert('I have received your message! 🚀')
            window.location.reload(false)
        },
            () => {
            alert('I have not received your message ☹️, please try again.')
        }
        
        )

    }

    
    return (
        <>

            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>Feel free to contact me for freelance services, or if you have openings at your company,
                        or for general inquiries and I'll get back to you shortly. 
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                    placeholder="Email"
                                    type="email" 
                                    name="email" 
                                    required 
                                    />
                                </li>
                                <li>
                                    <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject" 
                                    required 
                                    />
                                </li>
                                <li>
                                    <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                    type="submit" 
                                    className="flat-button" 
                                    value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
                <div className='info-map'>Kari Douglas,
                <br/>
                USA
                <br/>
                <span>kouglas2@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[42.361145, -71.057083]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[42.361145, -71.057083]}>
                            <Popup> Boston</Popup>

                        </Marker>
                    </MapContainer>
                </div>
                </div>

            <Loader type= "pacman"/> 


        </>
    )
}

export default Contact