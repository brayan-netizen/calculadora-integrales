import React from 'react';

interface StepByStepProps {
	steps: string[];
}

const StepByStep: React.FC<StepByStepProps> = ({ steps }) => {
	return (
		<div>
			<h3>Paso a Paso</h3>
			<ol>
				{steps.map((step, index) => (
					<li key={index}>{step}</li>
				))}
			</ol>
		</div>
	);
};

export default StepByStep;
