import React, { useState } from 'react';

interface InputFormProps {
	onSolve: (input: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSolve }) => {
	const [input, setInput] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSolve(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Escribe tu integral:
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Ej: 3x^2'
				/>
			</label>
			<button type='submit'>Resolver</button>
		</form>
	);
};

export default InputForm;
