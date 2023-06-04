import React, {useState} from 'react';
import {Google, Label, Topic, ViewHeadline} from "@mui/icons-material";
import {Alert, Button} from "@mui/material";
import "./Login.css"
import {auth, provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import {useStateValue} from "./StateProvider";

function Login() {

    const [alert,setAlert] = useState(false)
    // const [open,setOpen] = useState("")

    const [{user},dispatch] = useStateValue()
    const signIn = () => {

        signInWithPopup(auth,provider)
            .then(result => {
                dispatch({
                    type:"SET_USER",
                    user:result.user,
                })
            } )
            .catch((error) => console.log(error.message))


    }


    return (
        <div className="login">
            <div className="login__alert">
                 {alert ? <Alert severity="error">{alert}</Alert> : "" }
            </div>

            <div className="login__container">
                <img src="https://cdn-icons-png.flaticon.com/512/3814/3814716.png" alt="" className="login__container__image"/>
                <h1>Sign in to Siack</h1>
                <div className="login__buttons">
                    <Button onClick={signIn} >
                        <Google/>
                        SIGN IN WITH GOOGLE
                    </Button>
                </div>
            </div>


        </div>
    );
}

export default Login;

