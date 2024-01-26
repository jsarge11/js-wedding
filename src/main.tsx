import React, { useState } from 'react';
import './styles/output.css';
import { Hero } from './ui-components';
import { SecondaryHeader } from './ui-components/top/secondary-header';
import { Gingham } from './assets/gingham';
import { Gate } from './ui-components/gate';
import { FormSubmitted } from './ui-components/form-submitted';

export const Main = () => {
	const [isComplete, setIsComplete] = useState(false);
	return (
		<div className="h-full w-full overflow-x-hidden">
			<Hero />
			<SecondaryHeader />
			<Gingham isComplete={isComplete} />
			{isComplete ? <FormSubmitted /> : <Gate setIsComplete={setIsComplete} />}
		</div>
	);
};
