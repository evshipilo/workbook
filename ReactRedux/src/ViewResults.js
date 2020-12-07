import React from "react";
import {useSelector} from "react-redux";
import {store} from "./store";

export default function ViewResults(){
    let result=useSelector(store=>store.score)
    return (
        <div>
            {result}
        </div>
    )
}
