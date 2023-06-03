import React, {useState} from 'react';
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core";
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@mui/icons-material"
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import {collection,getDocs,doc} from "firebase/firestore"



function Sidebar() {

    const [rooms,setRooms] = useState([])

    const roomsCollection = collection(db,"rooms")
    getDocs(roomsCollection)
        .then(snapshot => {
            setRooms(snapshot.doc.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    console.log("Rooms : ",rooms)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton><DonutLarge/></IconButton>
                    <IconButton><Chat/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="search__container">
                    <SearchOutlined/>
                    <input type="text" className="sidebar__input" placeholder={"Search or start new chat"}/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat/>
                <SidebarChat />




            </div>



        </div>
    )
}

export default Sidebar;

