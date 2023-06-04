import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css"
import {Link} from "react-router-dom";


import {db} from "./firebase";
import {collection, setDoc, doc} from "firebase/firestore";


function SidebarChat({addNewChat, name, id}) {
    const [seed, setSeed] = useState()



    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    const createChat = () => {

        const roomName = prompt("Add the room name")
        if (roomName) {
            const rooms = collection(db, "rooms")
            setDoc(doc(rooms), {
                name: roomName
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });

        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sideBarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h4>{name}</h4>
                    <p><small>Hello</small></p>
                </div>
            </div>
        </Link>
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