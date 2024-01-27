import React, { Dispatch, FC, FormEventHandler, SetStateAction, useState } from 'react';
import { Input } from './input';
import { TextArea } from './text-area';
import { Spinner } from './spinner';
import axios from 'axios';

interface FormProps {
	setIsComplete: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<FormProps> = ({ setIsComplete }) => {
	const [isOutsideUSA, setIsOutsideUSA] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		setIsLoading(true);

		const formData = new FormData(event.target as HTMLFormElement);

		let payload = {};
		if (isOutsideUSA) {
			payload = {
				isOutsideUSA,
				name: (formData.get('name') as string).toUpperCase(),
				fullAddress: (formData.get('full address') as string).toUpperCase(),
			};
		} else {
			payload = {
				isOutsideUSA,
				name: (formData.get('name') as string).toUpperCase(),
				address: (formData.get('address') as string).toUpperCase(),
				addressTwo: (formData.get('address two') as string).toUpperCase(),
				city: (formData.get('city') as string).toUpperCase(),
				state: (formData.get('state') as string).toUpperCase(),
				zip: formData.get('zip') as string,
			};
		}

		axios
			.post('.netlify/functions/address', payload)
			.then(() => {
				setTimeout(() => {
					setIsComplete(true);
					setIsLoading(false);
				}, 1000);
			})
			.catch(() => {
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			});
	};

	const handleCheck = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		const target = e.target as HTMLInputElement;
		setIsOutsideUSA(target.checked);
	};

	return (
		<form
			className="flex flex-col justify-center items-end h-full pt-[50%] ml-28 md:pt-[15%] md:mr-28"
			onSubmit={handleFormSubmit}>
			<Input
				checked={isOutsideUSA}
				className="montserrat"
				label="Do you live outside the US?"
				type="checkbox"
				onClick={handleCheck}
			/>
			<Input label="Name" required />
			{isOutsideUSA ? (
				<TextArea label="Full Address" required />
			) : (
				<>
					<Input label="Address" required />
					<Input label="Address Two" />
					<Input label="City" required />
					<Input label="State" required />
					<Input label="ZIP" required type="number" />
				</>
			)}
			<button
				className="shadow-lg active:shadow-none text-black custom-bg-yellow mr-1 mt-3 text-xl py-2 px-10 rounded-md montserrat uppercase md:text-2xl"
				type="submit">
				{isLoading ? <Spinner /> : 'Submit'}
			</button>
		</form>
	);
};
