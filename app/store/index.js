
import reducer from '../features/Login/redux'
import rootSaga from '../saga'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
function CreateStore() {

    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)
    return store
}
const store = CreateStore();
export default store