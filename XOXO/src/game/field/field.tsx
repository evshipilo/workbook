import React, {useRef, useState} from "react";
import Box from "../box/box";
import './field.css'
import {hoc, WrappedComponent} from "../hoc/hoc";

function Field() {
	const [player, setPlayer] = useState('X')
	const arrayOfValues = new Array(9);
	arrayOfValues.fill(null)
	const [arr, setArr] = useState(arrayOfValues)
	const [isWin, setIsWin] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [winner, setWinner] = useState('')
	const [inputValue, setInputValue] = useState('')
	const [selectValue, setSelectValue] = useState('lime')

	const textArea = useRef(null)
	function handleFocus(){
		textArea.current.focus();
		textArea.current.value = 'focused'
	}

	const turn = (boxNumber: number) => {
		if (!isWin) {
			const newArr = [...arr]
			if (newArr[boxNumber] === null) {
				newArr[boxNumber] = player
				setArr(newArr)
				if (checkWin(player, newArr)) {
					setIsWin(true)
					setWinner(player)
				} else {
					checkDraw(newArr) ? setIsDraw(true) : setIsDraw(false)
				}
				player === 'X' ? setPlayer('O') : setPlayer('X')
			}
		}
	}

	const checkWin = (player: string, arr: Array<string | null>) => {
		if ((arr[0] === player && arr[1] === player && arr[2] === player) ||
			(arr[3] === player && arr[4] === player && arr[5] === player) ||
			(arr[6] === player && arr[7] === player && arr[8] === player) ||
			(arr[0] === player && arr[4] === player && arr[8] === player) ||
			(arr[2] === player && arr[4] === player && arr[6] === player) ||
			(arr[0] === player && arr[3] === player && arr[6] === player) ||
			(arr[1] === player && arr[4] === player && arr[7] === player) ||
			(arr[2] === player && arr[5] === player && arr[8] === player)) {
			return true
		}
		return false
	}

	const checkDraw = (arr: Array<string | null>) => {
		return !arr.some(el => el === null)
	}

	const handleNewGame = () => {
		setArr(arrayOfValues.fill(null))
		setWinner('')
		setIsWin(false)
		setPlayer('X')
		setIsDraw(false)
	}

	const handleChange = (event:any) => {
		setInputValue(event.target.value)
	}
	const handleSelect = (event:any) => {
		setSelectValue(event.target.value)
	}

	const listOfBoxes = arr.map((item, index) =>
		<Box key={index} boxNumber={index} turn={(boxNumber) => turn(boxNumber)}>
			{item}
		</Box>)

	const NewComponent1 = hoc(WrappedComponent, 'получено из HOC')
	const newComponent2 = <NewComponent1 data={'получено в props'}/>

	return (
		<>
			<div className='field'>
				{listOfBoxes}
			</div>
			{!isWin && !isDraw && <div>ходит {player}</div>}
			{isWin && <>
				<div>победитель {winner}</div>
				<button onClick={handleNewGame}> новая игра</button>
			</>}
			{isDraw && <>
				<div>ничья</div>
				<button onClick={handleNewGame}> новая игра</button>
			</>}
			<div>----------------------------------------------------------------</div>
			<input type="text" value={inputValue} onChange={handleChange}/>
			<select value={selectValue} onChange={handleSelect}>
				<option value="lemon">Лимон</option>
				<option value="lime">Лайм</option>
			</select>
			<div>----------------------------------------------------------------</div>
			<textarea ref={textArea}>Hi</textarea>
			<button onClick={handleFocus}>focus on textarea</button>
			<div>----------------------------------------------------------------</div>
			<WrappedComponent data={'получено в props'}/>
			<NewComponent1/>
			{newComponent2}

		</>
	)
}

export default Field;
