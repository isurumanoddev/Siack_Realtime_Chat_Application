import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="app">

                <div className="app__body">

                    <BrowserRouter>
                        <Sidebar/>
                        <Routes>

                            <Route path={"/"} element={<Chat/>}/>
                            <Route path={"/rooms/:roomId"} element={<Chat/>}/>

                        </Routes>
                          {/*<Sidebar/>*/}
                    </BrowserRouter>

                </div>


        </div>
    );
}

export default App;
