export function rootReducer(state, action) {
    if (action.type === 'increment') {
        return state + 1
    }
    if (action.type === 'decrement') {
        return state - 1
    }

    return state
}
