import { createStore, combineReducers } from 'react-redux'


const reducer = combineReducers({
    results,
    currentItem,
    suggestions
})

const store = createStore(reducer)