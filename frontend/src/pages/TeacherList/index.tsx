import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/pageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css'
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek] = useState('')
    const [time, setTime] = useState('')

    
    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes sao os Proffys disponiveis" >
               <form id="search-teachers" onSubmit={searchTeachers}>
               <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange= {e => { setSubject(e.target.value) }}
                        options={[
                        { value: "Artes", label: "Artes" },
                        { value: "Biologia", label: "Biologia" },
                        { value: "Geografia", label: "Geografia" },
                        { value: "Matematica", label: "Matematica" },
                        { value: "Ingles", label: "Ingles" },
                        { value: "Historia", label: "Historia" },
                        { value: "Fisica", label: "Fisica" },
                        { value: "Portugues", label: "Portugues" },
                        { value: "Quimica", label: "Quimica" },
                        ]}
                    />
                              <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange= {e => { setWeek(e.target.value) }}
                        options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda" },
                        { value: "2", label: "Terça" },
                        { value: "3", label: "Quarta" },
                        { value: "4", label: "Quinta" },
                        { value: "5", label: "Sexta" },
                        { value: "6", label: "Sábado" },
                        ]}
                    />
                    
                    <Input 
                        type="time"
                        name="time"
                        label="hora"
                        value={time}
                        onChange= {e => { 
                            setTime(e.target.value)}}
                    />

                    <button type="submit">buscar</button>

               </form>

               
           </PageHeader>

           <main>
           {teachers.map((teacher: Teacher) => {
               return <TeacherItem key={teacher.id} teacher={teacher} />
           })}
           </main>
        </div>
    )
}

export default TeacherList