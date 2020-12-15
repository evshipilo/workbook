import React from 'react'
import {useDispatch} from "react-redux";
import {increaseScore} from "./store";

export default function IncreaseBtn() {
    const dispatch=useDispatch()
    const step=3
return(
    <button onClick={()=>dispatch(increaseScore(step))}>
        +{step}
    </button>
)
}
