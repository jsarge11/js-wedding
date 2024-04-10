import React, { FC, FormEventHandler, useState } from 'react';
import { Spinner } from './spinner';
import axios from 'axios';

interface QRCodeProps {
	id?: string;
}

export const QRCode: FC<QRCodeProps> = () => {
	const qrInputClass = 'mb-3 p-5 text-black max-w-lg min-w-96';
	const [isLoading, setIsLoading] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		setIsLoading(true);

		const formData = new FormData(event.target as HTMLFormElement);
		const payload = {
			name: (formData.get('name') as string).toUpperCase(),
			guests: (formData.get('guests') as string).toUpperCase(),
		};

		axios
			.post('.netlify/functions/reception', payload)
			.then(() => {
				setTimeout(() => {
					setIsLoading(false);
					setIsComplete(true);
					// Reset the form
					const form = event.currentTarget;
					form.reset();
				}, 1000);
			})
			.catch(() => {
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			});
	};
	return (
		<form
			className="qr-background flex justify-center items-center flex-col montserrat p-3 min-h-[20%] pt-32 pb-32"
			id="reception"
			onSubmit={handleFormSubmit}>
			{isComplete ? (
				<h1 className="text-8xl qr-text">Thank you!</h1>
			) : (
				<>
					<h1 className="qr-text text-2xl text-center montserrat pb-3 min-w-md max-w-lg">
						RSVP for the Reception
					</h1>
					<input
						className={qrInputClass}
						maxLength={30}
						name="name"
						placeholder="Name"
						required
						type="text"
					/>
					<input
						className={qrInputClass}
						defaultValue={1}
						max={20}
						name="guests"
						placeholder="Number of Guests"
						type="number"
					/>
					<button className="qr-button bg-white text-black max-w-lg min-w-96 active:bg-gray-100 flex justify-center p-2">
						{isLoading ? <Spinner /> : 'Submit'}
					</button>
				</>
			)}
		</form>
	);
};
