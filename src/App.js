import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react";
import Login from "./Login";

function App() {
    const [user, setUser] = useState();

    return (
        <div className="app">
            {!user ? (
                    <Login/>
                ) :
                <div className="app__body">

                    <BrowserRouter>
                        <Sidebar/>
                        <Routes>

                            <Route path={"/"} element={<Chat/>}/>
                            <Route path={"/rooms/:roomId"} element={<Chat/>}/>

                        </Routes>
                    </BrowserRouter>

                </div>
            }

        </div>
    );
}

export default App;
