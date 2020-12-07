import {createStore} from 'redux'

const INITIAL_STATE = {
    score: 0,
}

//actions
const INCREASE = 'increase'
const DECREASE = 'decrease'

export const store = createStore(reducer)

//reducer
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, score: action.value + state.score}
        case DECREASE:
            return {...state, score: state.score - action.value}
        default:
            return state
    }
}

//action creators
export function increaseScore(val) {
    return {type: INCREASE, value: val}
}

export function decreaseScore(val) {
    return {type: DECREASE, value: val}
}

