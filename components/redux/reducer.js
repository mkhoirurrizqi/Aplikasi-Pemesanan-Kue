import { TOKEN } from './tipe'

const initData = {
    token:""
}
export const reducertoken = (state = initData, action) => {
    switch(action.type){
        case TOKEN:
            console.log('Token');
            return {...state,token:action.data}
        default:return state;
    }
}