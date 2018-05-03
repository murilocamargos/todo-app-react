import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: '',
        list: []
    })
})

export default rootReducer