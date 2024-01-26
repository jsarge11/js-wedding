import React, { FC } from 'react';
import { Header } from './header';

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
	return (
		<div className="main bg-top bg-cover h-full w-full">
			<div className="flex justify-center items-start">
				<Header text="Jade and Scotty" />
			</div>
			<h2 className="flex flex-col mt-4 justify-center items-center text-8xl">
				<span className="mt-14">Save</span>
				<span className="mt-14">the</span>
				<span className="mt-14">Date!</span>
			</h2>
		</div>
	);
};
