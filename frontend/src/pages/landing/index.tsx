import React from 'react';

// import das imagens svg
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyImg from '../../assets/images/icons/study.svg'
import GiveClassesImg from '../../assets/images/icons/give-classes.svg'
import PurpleHeartImg from '../../assets/images/icons/purple-heart.svg'

//import css
import './styles.css'


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={LogoImg} alt="Proffy"/>
                   <h2>sua plataforma de estudos online</h2>
                </div>
                <img 
                    src={LandingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <a href="#" className="study">
                        <img src={StudyImg} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="#" className="give-classes">
                        <img src={GiveClassesImg} alt="dar aulas"/>
                        dar aulas
                    </a>
                </div>
                <span className="total connections">
                    total de 200 conexoes ja realizadas <img src={PurpleHeartImg} alt="coraçao roxo"/>
                </span>
            </div>
        </div>

    )
}

export default Landing