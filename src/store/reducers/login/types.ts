export interface ModalState {
    isActiveReg: any;
    isActiveLog: any;
    token: string;
}

export enum LoginActionEnum {
    SET_MODAL_Reg = "SET_MODAL_Reg",
    SET_MODAL_Log = "SET_MODAL_Log",
    SET_TOKEN = "SET_TOKEN",
    SET_LOGOUT = "SET_LOGOUT",
}
export interface SetModalRegAction {
    type: LoginActionEnum.SET_MODAL_Reg;
    payload: any
}
export interface SetModalLogAction {
    type: LoginActionEnum.SET_MODAL_Log;
    payload: any
}

export interface SetTokenAction {
    type: LoginActionEnum.SET_TOKEN;
    payload: string
}

export interface SetLogout {
    type: LoginActionEnum.SET_LOGOUT;
    payload: string
}

export type ModalActions = SetModalRegAction| SetModalLogAction | SetTokenAction | SetLogout