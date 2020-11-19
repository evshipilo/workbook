import {createStore} from 'redux'

const INITIAL_STATE = {
    score: 0,
}

const store = createStore(reducer)

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'increase':
            return {score: action.value + state.score}
        case 'decrease':
            return {score: state.score + action.value}
        default:
            return state
    }
}

export function increaseScore() {
    return {type: 'increase', value: 1}
}

export function decreaseScore() {
    return {type: 'decrease', value: 1}
}

export default store
