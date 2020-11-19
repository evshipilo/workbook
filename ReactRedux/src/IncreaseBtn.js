import React from 'react'
import {useDispatch} from "react-redux";
import {increaseScore} from "./store";

export default function IncreaseBtn() {
    const dispatch=useDispatch()
return(
    <button onClick={()=>dispatch(increaseScore())}>
        +
    </button>
)
}
