import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Landing from './landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
        <Route path='/' exact component={Landing} />
        <Route path='/Study' component={TeacherList} />
        <Route path='/Give-classes' component={TeacherForm} />
    </BrowserRouter>
    )
}

export default Routes