import React, {useEffect, useState} from 'react';
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import {
    AttachFile, InsertEmoticon, Mic, MoreVert, Search,
} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {collection, doc, getDoc, getDocs, orderBy, query, setDoc, Timestamp} from "firebase/firestore";
import {db} from "./firebase";


import {useStateValue} from "./StateProvider";


function Chat() {
    const [input, setInput] = useState()
    const [seed, setSeed] = useState()
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])

    const [{user}, dispatch] = useStateValue()

    const roomsCollection = collection(db, "rooms")
    const roomDoc = doc(roomsCollection, roomId ? roomId : "");
    const messageCollection = collection(roomDoc, "messages")
    const messageDoc = doc(messageCollection);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    // useEffect(() => {
    //
    //
    //     getDoc(roomDoc)
    //         .then(snapshot => (
    //             setRoomName(snapshot.data().name)
    //
    //         ))
    //
    //
    // }, [roomId]);

    // useEffect(() => {
    //     const querySnapshot = query(messageCollection, orderBy("timestamp", "asc"));
    //     getDocs(querySnapshot)
    //         .then(snapshot => {
    //             setMessages(snapshot.docs.map(doc => doc.data()))
    //         })
    //
    // }, [roomId,input])


    const sendMessage = (e) => {
        e.preventDefault()
        // setInput("")

        console.log("message ", input)


        const data = {
            message: input,
            name: user.displayName,
            timestamp: Timestamp.fromDate(new Date())


        }
        setDoc(messageDoc, data)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        setInput("")

    }


    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__header__left">
                    <h3 className="room__name">{roomName}</h3>
                    <p>Last Seen at {
                        new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleString()
                    }</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton><Search/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>

                </div>
            </div>


            <div className="chat__body">
                {messages?.map(message => (


                    <div
                        className={`chat__send__message  ${message.name !== user.displayName && "chat__recieved__message"}`}>
                        <span className="chat__body__message__user">{message.name}</span>
                        <div className="chat__body__message__body">{message.message}<span
                            className="chat__body__message__time">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                        </div>
                    </div>
                ))}


            </div>
            <div className="chat__footer">
                <IconButton><InsertEmoticon/></IconButton>
                <form className={"chat__footer__form"} action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className={"chat__footer__input"}
                           type="text"
                           placeholder={"Type your message"}/>
                    <button onClick={sendMessage} type={"submit"} className={'chat__footer__button'}>Send</button>
                </form>
                <IconButton><Mic/></IconButton>
            </div>


        </div>
    );
}

export default Chat;
