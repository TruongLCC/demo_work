import { all, call } from 'redux-saga/effects';
import loginSaga from '../features/Login/saga'
export default function* rootSaga() {
    yield all([
        call(loginSaga),
    ])
}