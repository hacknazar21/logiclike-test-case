import React from 'react';

import './courses.scss';
import {CoursesWidget} from "../../../widgets";


interface CoursesPageProps {

}

export function CoursesPage({}: CoursesPageProps) {

    return (
        <div className='courses-page'>
            <CoursesWidget/>
        </div>
    );
}
