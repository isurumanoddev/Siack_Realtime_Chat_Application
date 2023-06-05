import React, {useEffect, useState} from 'react';
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core";
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@mui/icons-material"
import SidebarChat from "./SidebarChat";

import {collection, doc, getDocs, orderBy, query} from "firebase/firestore"
import {db} from "./firebase";
import {useStateValue} from "./StateProvider";


function Sidebar() {

    const [rooms, setRooms] = useState([])
    const [{user}, dispatch] = useStateValue();



    const roomsCollection = collection(db, "rooms")



    useEffect(() => {
        getDocs(roomsCollection)
            .then(snapshot => {
                setRooms(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={`${user?.photoURL}`}/>
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

                {rooms.map(room => (
                    <SidebarChat name={room.data.name} id={room.id} key={room.id}/>
                ))}


            </div>


        </div>
    )
}

export default Sidebar;

