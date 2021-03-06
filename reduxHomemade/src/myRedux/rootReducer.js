import {DECREMENT, INCREMENT} from "./types";

export function rootReducer(state, action) {
    if (action.type === INCREMENT) {
        return state + 1
    }
    if (action.type === DECREMENT) {
        return state - 1
    }

    return state
}

//принимаем state и возвращаем измененный
