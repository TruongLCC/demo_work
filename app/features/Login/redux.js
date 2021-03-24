import { State } from "react-native-gesture-handler"


export const actionsType = {
    login: 'LOGIN',
    loginSuccess: 'LOGIN_SUCCESS'

}

export const login = (userName, passWord) => {
    return {
        type: actionsType.login,
        payload: {
            username: userName,
            password: passWord,
        }
    }
}

export const loginSuccess = (data) => {
    return {
        type: actionsType.loginSuccess,
        data: data,
    }
}

const initStore = {
    data: {},
}

const reducer = (state = initStore, action) => {
    switch (action.type) {
        case (actionsType.loginSuccess):
            return {
                ...state,
                data: action.data,
            }
        default:
            return { ...state }
    }
}

export default reducer