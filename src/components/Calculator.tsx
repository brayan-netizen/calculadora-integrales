import React, { useState } from 'react';
import { solveIntegral } from '../utils/integralSolver';
import styles from '../styles/calculator.module.css';
import InputForm from './InputForm';
import StepByStep from './StepByStep';

const Calculator: React.FC = () => {
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('');
	const [steps, setSteps] = useState<string[]>([]);

	const handleSolve = (input: string) => {
		const { result, steps } = solveIntegral(input);
		setExpression(input);
		setResult(result);
		setSteps(steps);
	};

	return (
		<div className={styles.calculator}>
			<h1>
				Calculadora de Integrales
				<br />
				Método Directo
			</h1>
			<InputForm onSolve={handleSolve} />
			{result && (
				<div>
					<h2>Resultado</h2>
					<p>{result}</p>
					<StepByStep steps={steps} />
				</div>
			)}
			{expression}
		</div>
	);
};

export default Calculator;
