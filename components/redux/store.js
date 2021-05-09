import {createStore} from 'redux'
import {reducertoken} from './reducer'
const storeState = createStore(reducertoken);
export default storeState;