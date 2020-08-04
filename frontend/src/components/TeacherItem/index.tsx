import React from 'react'

import WppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'



function TeacherItem () {
    return(
        <article className="teacher-item">
<header>
    <img src="https://avatars0.githubusercontent.com/u/51245846?s=460&u=a33a3158bed2647b1170cecba4666dfde0d4370b&v=4" alt="Rodrigo sabino"/>
     <div>
         <strong>
             Rodrigo Sabino
         </strong>
         <span> Quimica</span>
         <p>
         Entusiasta das melhores tecnologias de Quimica avançada.
         <br/><br/>
         Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
         </p>
         <footer>
             <p>
             preço/hora
             <strong>R$ 50,00</strong>
             </p>
             <button type="button">
                 <img src={WppIcon} alt="Whatsapp"/>
                 Entrar em contato
             </button>
         </footer>
     </div>
</header>

</article>
    )
}

export default TeacherItem