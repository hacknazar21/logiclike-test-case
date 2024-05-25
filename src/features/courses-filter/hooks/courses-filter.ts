import {ICourses} from "../../../entities";
import {useEffect, useState} from "react";
import {ICourseFilter, ICourseFilters} from "../model";

export const useCoursesFilter = (courses: ICourses) => {
    const [coursesFilters, setCoursesFilters] = useState<ICourseFilters>([]);
    const [currentFilter, setCurrentFilter] = useState<ICourseFilter>('ALL');

    useEffect(() => {
        if(courses.length > 0) {
            const tags = []
            courses.map(course => course.tags.map(tag => tags.some(tagIncluded => tagIncluded === tag) ? tag : tags.push(tag)))
            setCoursesFilters(["ALL", ...tags])
        }
    }, [courses])

    function onChangeFilter(newFilter: ICourseFilter) {
        if(newFilter !== currentFilter)
            setCurrentFilter(newFilter)
    }

    function filterCourses() {
        if(currentFilter !== "ALL") {
           return courses.filter(course => course.tags.some(tag => tag === currentFilter))
        }
        return courses
    }


    return {
        coursesFilters,
        currentFilter,
        onChangeFilter,
        filteredCourses: filterCourses()
    }
}
