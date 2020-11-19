import React from 'react'
import {shallowEqual, useSelector} from "react-redux";

export default function ViewResult() {
    const score=useSelector((state)=>state.score,shallowEqual)
return(
    <div>
        {score}
    </div>
)
}
