import React, { FC } from 'react';
import { Header } from './header';

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
	return (
		<div
			className="main bg-top bg-cover h-full w-full mb-24"
			style={{ backgroundPosition: `15% 50%` }}>
			<div className="flex justify-center items-start">
				<Header text="Jade and Scotty" />
			</div>
			<h2 className="flex flex-col mt-4 justify-center items-center text-8xl">
				<span className="mt-14">Save</span>
				<span className="mt-14">the</span>
				<span className="mt-14">Date!</span>
			</h2>

			<a
				className="montserrat bg-white text-black font-semibold py-2 px-4 rounded shadow flex w-64 justify-between mx-auto"
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
		</div>
	);
};
