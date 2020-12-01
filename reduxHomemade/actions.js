import {INCREMENT, DECREMENT} from "./src/myRedux/types";

export function increment(){  //для красоты
    return {
        type: INCREMENT
    }
}
export function decrement(){
    return {
        type: DECREMENT
    }
}
