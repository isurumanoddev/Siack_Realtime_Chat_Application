import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
    return (
        <div className="app">

            <div className="app__body">
                <BrowserRouter>
                    <Sidebar/>
                    <Routes>

                        <Route path={"/"} element={<Chat/>}/>
                        <Route path={"/rooms/:roomId"} element={<Chat/>}/>

                    </Routes>
                </BrowserRouter>

            </div>
        </div>
    );
}

export default App;
