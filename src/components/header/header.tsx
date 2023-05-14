
import style from "./header.module.css"
import ModalRegister from "../modal-register/modal-register";
import {useDispatch} from "react-redux";
import ModalLogin from "../modal-login/modal-login";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const dispatch = useDispatch();
    const {token} = useTypedSelector(state => state.user);
    console.log(token)
    return (
        <div className={style.body}>
            <ModalRegister></ModalRegister>
            <ModalLogin></ModalLogin>
            <div className={style.main}>
                <img className={style.img} src="" alt=""/>
                <a className={style.link} href="">Team</a>
                <a className={style.link} href="">Teams</a>
                <a className={style.link} href="">Profile</a>

                { token.length > 0 ? (<div>
                    <button onClick={ () => dispatch({type: "SET_LOGOUT", payload: ""})} className={style.login_link}>Вийти</button>
                </div>) :
                    (<div className={style.login}>
                    <button onClick={ () => dispatch({type: "SET_MODAL_Reg", payload: true})} className={style.login_link}>Зареєструватися</button>
                    <button onClick={ () => dispatch({type: "SET_MODAL_Log", payload: true})} className={style.login_link}>Увійти</button>
                </div>)}
            </div>
        </div>
    );
};

export default Header;