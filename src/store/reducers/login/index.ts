import {LoginActionEnum, ModalActions, ModalState} from "./types";

const initialState:ModalState = {
    isActiveReg: false,
    isActiveLog: false,
    token: ""
}

export default function modalReducer(state = initialState, action: ModalActions): ModalState {
    switch (action.type) {
        case LoginActionEnum.SET_MODAL_Reg:
            return {...state, isActiveReg: action.payload}
        case LoginActionEnum.SET_MODAL_Log:
            return {...state, isActiveLog: action.payload}
        case LoginActionEnum.SET_TOKEN:
            return {...state, token: action.payload}
        case LoginActionEnum.SET_LOGOUT:
            return {...state, token: action.payload}
        default:
            return state;
    }
}