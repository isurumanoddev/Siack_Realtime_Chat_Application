import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue()
    console.log(user)

    return (
        <div className="app">
            {!user ? <Login/> :

                <div className="app__body">

                    <BrowserRouter>
                        <Sidebar/>
                        <Routes>

                            {/*<Route path={"/"} element={<Chat/>}/>*/}
                            <Route path={"/rooms/:roomId"} element={<Chat/>}/>

                        </Routes>
                        {/*<Sidebar/>*/}
                    </BrowserRouter>

                </div>

            }


        </div>
    );
}

export default App;
