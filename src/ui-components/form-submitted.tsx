import React, { FC } from 'react';

interface FormSubmittedProps {
	id?: string;
}

export const FormSubmitted: FC<FormSubmittedProps> = () => {
	return (
		<div className="h-screen form-submitted -mt-10 relative z-50 pt-28 h-full">
			<div className="relative text-center font-normal text-base h-full ">
				<div className="relative inline-flex items-center">
					<h1 className="text-5xl w-48 mb-4">Thank You!</h1>
				</div>
				<div
					className="box-border h-3/4 border-solid border-white border-2 mx-3 sm:mx-[25%] bg-cover bg-bottom"
					id="thank-you"
				/>
				<div className="relative inline-flex items-center">
					<h1 className="text-3xl w-48 mt-4">Jade & Scotty</h1>
				</div>
			</div>
		</div>
	);
};
