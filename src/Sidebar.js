import React from 'react';
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core";
import {Chat, DonutLarge, MoreVert} from "@mui/icons-material"


function Sidebar() {
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

                <input type="text" className="sidebar__input" placeholder={"Search"}/>
            </div>

            <div className="sidebar__chats"></div>


        </div>
    )
}

export default Sidebar;

