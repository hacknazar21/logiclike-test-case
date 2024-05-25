import React, {CSSProperties} from 'react';

import './course.scss';
import {ICourse} from "@entities";

interface CourseCardProps {
    course: ICourse;
    style: CSSProperties;
}

export const CourseCard = React.memo(({
                                          course, style
                                      }: CourseCardProps) => {
    return (
        <article style={style} className='course-card'>
            <div className="course-card__image-box" style={{
                backgroundColor: course.bgColor
            }}>
                <img src={course.image} alt={course.name} className="course-card__image"/>
            </div>
            <h2 className="course-card__name">{course.name}</h2>
        </article>
    );
})
