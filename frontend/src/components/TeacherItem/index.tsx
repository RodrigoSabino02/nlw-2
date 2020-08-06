import React from 'react'

import WppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
    avatar: string
    bio: string
    cost: number
    id: number
    name: string
    subject: string
    whatsapp: string
}



interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">
<header>
    <img src={teacher.avatar} alt={teacher.name}/>
     <div>
         <strong>
             {teacher.name}
         </strong>
         <span> {teacher.subject}</span>
         <p>
         {teacher.bio}
         </p>
         <footer>
             <p>
             preço/hora
             <strong>R${teacher.cost}</strong>
             </p>
             
             <a target="_blank" onClick={createNewConnection} href={`https://wa.me/055${teacher.whatsapp}`}>
                 <img src={WppIcon} alt="Whatsapp"/>
                 Entrar em contato
             </a>
         </footer>
     </div>
</header>

</article>
    )
}

export default TeacherItem