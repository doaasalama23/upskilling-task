import './App.css';
import Home from "./Home";
import {Link} from "react-router-dom";

function App() {

    return (
        <div className={'container-flude bg-no-repeat bg-cover'} style={{
            backgroundImage: 'url("/fff.jpeg")'
        }}>
            <div className={'hero'}>
                <input className={'border w-full p-[15px] mt-[40px] mb-[40px] rounded-full'} placeholder={'Saerch by Name'}/>
                <div className="flex justify-end">
                    <Link className={'link-main'} to="/add-user">Add New Contact</Link>
                </div>
            <Home/>
           </div>
        </div>
    );
}

export default App;