import React, {useState} from 'react';
import style from "./modal-login.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";


const ModalLogin = () => {
    const {isActiveLog} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();
    const apiUrl = "http://localhost:5000"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        console.log("Email:", email);
        console.log("Password:", password);
        const requestBody = {
            "email":email,
            "password":password
        }
        try {
            const response = await fetch(`${apiUrl}/player/login`, {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const responseToken = await response.json()
            dispatch({type: "SET_TOKEN", payload: responseToken.token});
            setEmail("");
            setPassword("");
            dispatch({type: "SET_MODAL_Log", payload: false});
        }catch (e){
            alert('Something went wrong' + e);
        }

    };

    return (
        <div>
            {isActiveLog && (
                <div className={style.body}>
                    <div className={style.main}>
                        <span onClick={ () => dispatch({type: "SET_MODAL_Log", payload: false})} className={style.close}>X</span>
                        <div className={style.inputBlock}>
                            <p className={style.label}>Email</p>
                            <input
                                className={style.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={style.inputBlock}>
                            <p className={style.label}>Password</p>
                            <input
                                className={style.input}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={() => handleSubmit()} className={style.button}>Увійти</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ModalLogin;