import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// import das imagens svg
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyImg from '../../assets/images/icons/study.svg'
import GiveClassesImg from '../../assets/images/icons/give-classes.svg'
import PurpleHeartImg from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api';

//import css
import './styles.css'


function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data

            setTotalConnections(total)
        })
    }, [])

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

                   <Link to="/Study" className="study">
                        <img src={StudyImg} alt="Estudar"/>
                        Estudar
                   </Link>

                    <Link to="/Give-classes" className="give-classes">
                        <img src={GiveClassesImg} alt="dar aulas"/>
                        dar aulas
                    </Link>
                </div>
                <span className="total connections">
                    total de {totalConnections} conexoes ja realizadas <img src={PurpleHeartImg} alt="coraçao roxo"/>
                </span>
            </div>
        </div>

    )
}

export default Landing