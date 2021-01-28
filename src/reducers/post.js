import { SEND_POST } from '../constants/actionTypes'

const reducer = (post = [], action) => {
    switch (action.type){
        case SEND_POST: 
            return action.payload
        default:
            return post
    }
}

export default reducer