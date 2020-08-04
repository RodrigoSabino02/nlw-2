import React from 'react';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'



function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes sao os Proffys disponiveis" >
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">materia</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week_day">dia da semana</label>
                       <input type="text" id="week_day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">hora</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
           </PageHeader>

           <main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
           </main>
        </div>
    )
}

export default TeacherList