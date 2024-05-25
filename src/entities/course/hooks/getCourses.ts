import {COURSES_URL} from "../api";
import {useEffect, useState} from "react";
import {ICourses} from "../model";

export const useGetCourses = () => {
    const [courses, setCourses] = useState<ICourses>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getCourses() {
        try {
            const response = await fetch(COURSES_URL);
            const data: ICourses = await response.json();
            setCourses(data);
        } catch (e) {
            alert(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCourses().finally(() => {
            setIsLoading(false)
        })
    }, [])


    return {
        courses, isLoading
    }
}
