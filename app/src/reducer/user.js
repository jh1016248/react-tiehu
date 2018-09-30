const SET_USER_INFO = 'SET_USER_INFO'

let User = (state, action) => {
    if(!state) {
        state = {
            user: {}
        }
    }
    switch (action.type) {
        case SET_USER_INFO: 
            return {
                user: action.user
            }
        default:
            return state
    }
}

export default User

