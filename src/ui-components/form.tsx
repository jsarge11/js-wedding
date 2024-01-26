import React, { Dispatch, FC, FormEventHandler, SetStateAction, useState } from 'react';
import { Input } from './input';
import { TextArea } from './text-area';
import { Spinner } from './spinner';

interface FormProps {
	setIsComplete: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<FormProps> = ({ setIsComplete }) => {
	const [isOutsideUS, setIsOutsideUS] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		setIsLoading(true);

		const formData = new FormData(event.target as HTMLFormElement);

		let payload = {};

		if (isOutsideUS) {
			payload = {
				name: formData.get('name') as string,
				address: formData.get('full address') as string,
			};
		} else {
			payload = {
				name: formData.get('name') as string,
				address: formData.get('address') as string,
				addressTwo: formData.get('address two') as string,
				city: formData.get('city') as string,
				state: formData.get('state') as string,
				zip: formData.get('zip') as string,
			};
		}

		setTimeout(() => {
			setIsComplete(true);
			setIsLoading(false);
		}, 1000);
	};

	const handleCheck = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		const target = e.target as HTMLInputElement;
		setIsOutsideUS(target.checked);
	};

	return (
		<form
			className="flex flex-col justify-center items-end h-full pt-[75%] ml-28 md:pt-[15%] md:mr-28"
			onSubmit={handleFormSubmit}>
			<Input
				checked={isOutsideUS}
				className="montserrat"
				label="Do you live outside the US?"
				type="checkbox"
				onClick={handleCheck}
			/>
			<Input label="Name" required />
			{isOutsideUS ? (
				<TextArea label="Full Address" required />
			) : (
				<>
					<Input label="Address" required />
					<Input label="Address Two" />
					<Input label="City" required />
					<Input label="State" required />
					<Input label="ZIP" required />
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
