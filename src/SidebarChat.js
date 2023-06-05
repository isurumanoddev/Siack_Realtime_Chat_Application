import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css"
import {Link} from "react-router-dom";


import {db} from "./firebase";
import {collection, setDoc, doc, getDocs, query, orderBy} from "firebase/firestore";


function SidebarChat({addNewChat, name, id}) {
    const [seed, setSeed] = useState()


     const [lastMessage, setLastMessage] = useState([]);

    const roomsCollection = collection(db, "rooms")
    const roomDoc = id ? doc(roomsCollection,id) : doc(roomsCollection)
    const messageCollection = collection(roomDoc, "messages")


    useEffect(() => {
        const querySnapshot = query(messageCollection, orderBy("timestamp", "asc"));
        getDocs(querySnapshot)
            .then(snapshot => {
                setLastMessage(snapshot.docs.map(doc => doc.data()))
            })

    }, [id])




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
                    <p><small>{lastMessage[lastMessage.length-1]?.message }</small></p>
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