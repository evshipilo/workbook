import React from 'react'
import {useDispatch} from "react-redux";
import {decreaseScore} from "./store";

export default function DecreaseBtn() {
    const dispatch=useDispatch()
    return(
        <button onClick={()=>dispatch(decreaseScore(1))}>
            -1
        </button>
    )
}
