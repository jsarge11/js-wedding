import React, { FC, SetStateAction, Dispatch } from 'react';
import { Form } from './form';

interface GateProps {
	setIsComplete: Dispatch<SetStateAction<boolean>>;
}

export const Gate: FC<GateProps> = ({ setIsComplete }) => {
	return (
		<div
			className="gate bg-cover bg-center min-h-full relative z-50 -mt-10 lg:-mt-72 lg:custom-gate-position xl:-mt-96"
			id="gate">
			<Form setIsComplete={setIsComplete} />
		</div>
	);
};
