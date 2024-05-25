import React from 'react';

import './courses-filter.scss';
import {ICourseFilter, ICourseFilters} from "../../model";

interface CoursesFilterProps {
    coursesFilters: ICourseFilters;
    currentFilter: ICourseFilter;
    onChangeFilter: (newFilter: ICourseFilter) => void
}

export function CoursesFilter({
    coursesFilters, onChangeFilter, currentFilter
                              }: CoursesFilterProps) {
    function onClickFilter() {
        onChangeFilter(this.filterName)
    }

    return (
        <div className='courses-filter'>
            <div className="courses-filter__items">
                {coursesFilters.map((coursesFilter, index) => (
                    <button
                        key={`course-filter-${coursesFilter}-${index}`}
                        className={
                            ['courses-filter__item', coursesFilter === currentFilter ? 'courses-filter__item_active' : ''].join(' ').trim()
                        }
                        onClick={onClickFilter.bind({filterName: coursesFilter})}
                    >
                        {coursesFilter !== "ALL" ? coursesFilter : 'Все темы'}
                    </button>
                ))}
            </div>
        </div>
    );
}
