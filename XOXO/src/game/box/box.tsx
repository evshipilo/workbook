import React from "react";
import './box.css'

interface BoxProps{
	boxNumber:number;
	turn: (key:number)=>void
	children: any;
}

function Box(props: BoxProps) {

	const {turn, boxNumber, children} = props

	const handleClick = () => {
		turn(boxNumber)
	}

	return (<div className='box' onClick={handleClick}>{children}</div>)
}

export default Box;
