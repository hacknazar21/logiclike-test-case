import React from 'react';

import {CoursesFilter, useCoursesFilter} from "../../features";
import {Courses, useGetCourses} from "../../entities";

interface CoursesWidgetProps {

}

export function CoursesWidget({}: CoursesWidgetProps) {
    const {
        courses, isLoading
    } = useGetCourses();
    const {
        currentFilter, filteredCourses, coursesFilters, onChangeFilter
    } = useCoursesFilter(courses)

    if(!isLoading)
    return (
        <>
            <CoursesFilter onChangeFilter={onChangeFilter} coursesFilters={coursesFilters} currentFilter={currentFilter}/>
            <Courses courses={filteredCourses}/>
        </>
    );
}
