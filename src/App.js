import './App.css';
import { evaluate } from "mathjs";
import React, { useState } from 'react';

const App = () => {
	const buttons = ['C', '+', '-', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
	let [expression, setExpression] = useState('');
	const[display, setDisplay] = useState(0);

	const handleClick = (buttonValue) => {
		
		if(buttonValue === 'C'){
			setExpression('');
			setDisplay(0);
		} else if(buttonValue !== '='){
			setExpression(expression += buttonValue);
			setDisplay(expression);
		} else {
			try {
				let answer = evaluate(expression);
				setDisplay(answer);
			} catch (error){
				console.log(error);
			}
		}
	}

	return (
		<div className='calcButtons'>
			<h3>{display}</h3>
			{buttons.map((buttonValue, index) => {
				return(
					<button key={index} onClick={() => handleClick(buttonValue)}>{buttonValue}</button>
				)
			})}
		</div>
	);
}

export default App;
