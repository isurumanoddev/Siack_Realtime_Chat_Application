import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css"


function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState()

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    }, []);



    const createChat = () => {

        const roomName = prompt("Add the room name")
        if (roomName) {
            // adsaadd
        }
    }

    return !addNewChat ?  (
        <div className="sideBarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h4>Hello</h4>
                <p><small>Hello</small></p>
            </div>
        </div>
    ) : (
        <div className="sideBarChat">

            <div onClick={createChat}
                className="sidebarChat__info">
                <h3>Add New Chat</h3>

            </div>
        </div>
    )
}

export default SidebarChat;