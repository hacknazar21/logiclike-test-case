import React from 'react';
import {useAutoAnimate} from "@formkit/auto-animate/react";

import {ICourses} from "../../model";
import {CourseCard} from "@entities/course/ui/course";

import './courses.scss';

interface CoursesProps {
   courses: ICourses
}

export function Courses({courses}: CoursesProps) {
    const [coursesRef] = useAutoAnimate({})

    return (
        <div ref={coursesRef} className='courses'>
            {courses.map(course => (<CourseCard key={course.id} course={course}/>))}
        </div>
    );
}
