import {Router} from "./router";
import './app.scss'
interface AppProps {

}

export function App({}: AppProps) {
    return (
        <div className='wrapper'>
            <main>
                <Router/>
            </main>
        </div>
    );
}
