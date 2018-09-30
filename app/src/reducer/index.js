import { combineReducers } from 'redux'
import messageList from './messageList'
import themeColor from './themeColor'
import user from './user'

export default combineReducers({
    messageList,
    themeColor,
    user
})
