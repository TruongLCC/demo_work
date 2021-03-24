import { call, put, takeLatest } from "redux-saga/effects";
import { login, loginSuccess, actionsType } from './redux'
import api from '../../api/methods/loginUser.js'
import { navigateToHome } from '../../navigation/NavigationHelpers'
function* fetchLogin(action) {
    const user = action.payload
    yield call(() => {
        console.log('user: ', user)
    })
    const response = yield api(user.username, user.password)
    yield call(() => {

        console.log('respons: ', response)
    })
    if (response.status === 1) {
        yield put(loginSuccess(response.data))
        yield call(() => {
            alert('login success')
            // navigateToHome
        })
    } else {
        alert(response.message)
    }
}

export default function* loginSagas() {
    yield takeLatest(actionsType.login, fetchLogin)
}