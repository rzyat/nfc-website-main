import React from 'react'
import "./Main.css"
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import nfcImage from "../Assets/nfc_detector.jpg"
import logo from "../Assets/SmartCard_Light.png"


const Main = () => {
    
    const [text, setText] = useState('Smart.');
    useEffect(() => {
        const interval = setInterval(() => {
          setText((prevText) => (prevText === 'Smart.' ? 'Digitale.' : 'Smart.'));
        }, 2500);

        const textChanger = document.querySelector('.text-changer');
        textChanger.classList.add('animated');
    
        return () => {
          clearInterval(interval);
        };
      }, []);

  return (
    <div className='container-website'>
        <div className='content-website'>
            <div className='first-div' id='first-div'>
                <div className='nav-menu'>
                    <nav>
                        <ul>
                            <span className='logo-container'> <img src={logo} width={150} className='logo-content' alt='logo' /> </span>
                            <li>
                                <Link to="first-div" smooth={true} duration={600}>Accueil</Link>
                            </li>
                            <li>
                                <Link to="second-div" smooth={true} duration={600}>Sur</Link>
                            </li>
                            <li>
                                <Link to="third-div" smooth={true} duration={600}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="fourth-div" smooth={true} duration={600}>Tarification</Link>
                            </li>
                            {/* <li>
                                <Link to="fifth-div" smooth={true} duration={600}>Blog</Link>
                            </li> */}
                            <li>
                                <Link to="sixth-div" smooth={true} duration={600}>Contact</Link>
                            </li> 
                            <button className='inscription-section'>
                                S'identifier  
                            </button>
                        </ul>
                    </nav>
                </div>
                <div className='content-of-first'>
                    <div className='icons-container'>
                        <FaInstagram className='icon' size={30}/> <br/>
                        <FaFacebook className='icon' size={30}/> <br/>
                        <FaLinkedin className='icon' size={30}/>
                    </div>
                    <div className='text-container'>
                            <div className='text-image-flex'>
                                <div className='first-section-top'>
                                    <div className='animated-text'>
                                        Carte de visite <br/> <span className='text-changer'> {text} </span> 
                                    </div>
                                    
                                    <div className='sous-card'>
                                        <p className='para-description'>
                                            Boostez votre présence professionnelle grâce à la technologie NFC au Maroc. 
                                            Optez pour des cartes de visite digitales innovantes et interactives. 
                                            Avec NFC Maroc, transformez votre manière de partager vos informations 
                                            professionnelles et laissez une impression mémorable sur vos contacts. 
                                        </p>
                                        <button className='start-button'>
                                            Commencer
                                        </button>
                                    </div>
                                </div>
                                <div className='image-container'>
                                    <img src={nfcImage} width={400} alt='img' />
                                </div>
                            </div>
                    </div>
                </div>
                {/* <FaScroll size={50} className='scroll-icon'/> */}

            </div>
            <div className='second-div' id='second-div'>
                <div className='second-div-content'>
                    <p className='second-div-paragraph'> Augmentez votre portée grâce à l'innovation </p>
                    <h2 className='second-div-h2'> Expérience <br/> professionnelle connectée </h2>
                    <p className='second-div-paragraph-2'> 
                        Découvrez le futur des cartes de visite au maroc, des carte visite numérique, 
                        NFC virtuelles de NFCMaroc. Nos cartes digitales intègrent la technologie NFC, offrant ainsi une expérience utilisateur exceptionnelle. 
                        Grâce à la simplicité du tap NFC, vos contacts pourront accéder instantanément à votre profil 
                        professionnel et obtenir toutes les informations nécessaires. 
                    </p>
                </div>
            </div>
            <div className='third-div' id='third-div'>

            </div>
            <div className='fourth-div' id='fourth-div'>

            </div>
            <div className='fifth-div' id='fifth-div'>

            </div>
            <div className='sixth-div' id='sixth-div'>

            </div>
            <div className='footer'>

            </div>
        </div>
    </div>
  )
}

export default Main