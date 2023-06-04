import React, {useEffect, useState} from 'react';
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import {
    AttachFile, InsertEmoticon, Mic, MoreVert, Search,
} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "./firebase";


function Chat() {
    const [input, setInput] = useState()
    const [seed, setSeed] = useState()
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState("")

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000))
    // }, []);
    // const roomsCollection = collection(db, "rooms")
    // useEffect(() => {
    //
    //     const roomDoc = doc(roomsCollection, roomId);
    //    getDoc(roomDoc)
    //        .then(snapshot => (
    //            setRoomName(snapshot.data().name)
    //
    //        ))
    //
    //
    //
    // }, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault()
        setInput("")
        console.log("message ", input)
    }


    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__header__left">
                    <h3 className="room__name">{roomName}</h3>
                    <p>Last Seen at 2.55 pm</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton><Search/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>

                </div>
            </div>


            <div className="chat__body">
                <div className="chat__body__message">
                    <span className="chat__body__message__user">isuru manod</span>
                    <div className="chat__body__message__body">
                        hello how are you <span className="chat__body__message__time">3.45 pm</span>
                    </div>


                </div>

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
