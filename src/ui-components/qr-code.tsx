import React, { FC, FormEventHandler, useState } from 'react';
import { Spinner } from './spinner';
import axios from 'axios';

interface QRCodeProps {
	id?: string;
}

export const QRCode: FC<QRCodeProps> = () => {
	const qrInputClass = 'mb-3 p-5 text-black max-w-lg min-w-[80%] montserrat';
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
		<span id="reception">
			<form
				className="qr-background flex justify-center items-center flex-col p-3 min-h-[100%] pt-32 pb-32 max-h-screen"
				onSubmit={handleFormSubmit}>
				<h1 className="text-6xl mb-8">Jade & Scotty</h1>
				{isComplete ? (
					<h1 className="text-5xl montserrat qr-text">Thank you!</h1>
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
							max={20}
							min={1}
							name="guests"
							placeholder="Number of Guests"
							type="number"
						/>
						<button className="qr-button bg-white text-black max-w-lg min-w-[80%] active:bg-gray-100 flex justify-center p-2 montserrat">
							{isLoading ? <Spinner /> : 'Submit'}
						</button>
					</>
				)}
				<a
					className="montserrat bg-white text-black font-semibold py-2 px-4 rounded shadow flex w-64 justify-between mx-auto mt-8"
					href="https://www.amazon.com/wedding/share/jadeandscotty"
					rel="noopener noreferrer"
					target="_blank">
					<img
						alt="Amazon icon"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/512px-Amazon_icon.svg.png"
						width="25"
					/>
					Our Amazon Registry
				</a>
				<a
					className="montserrat bg-white text-black font-semibold py-2 px-4 rounded shadow flex w-64 justify-between mx-auto mt-8"
					href="https://www.anthropologie.com/registry/listing?registryId=0CB480FD1905"
					rel="noopener noreferrer"
					target="_blank">
					{/* <img
					alt="Amazon icon"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/512px-Amazon_icon.svg.png"
					width="25"
				/> */}
					Our Anthropology Registry
				</a>
			</form>
		</span>
	);
};
