import React from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sideBarChat">
            <Avatar src="https://avatars.dicebear.com/api/human/asddd123.svg"/>
            <div className="sidebarChat__info">
                  <h2>Hello</h2>
                <p>last message....</p>
            </div>
        </div>
    );
}

export default SidebarChat;