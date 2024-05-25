import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    CoursesPage
} from "@pages";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoursesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
