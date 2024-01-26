import React, { FC } from 'react';

interface HeaderProps {
	text: string;
}

export const Header: FC<HeaderProps> = ({ text }) => {
	return (
		<div className="flex justify-center items-center w-11/12 mt-14">
			<hr className="w-1/4" />
			<h1 className="min-w-max mx-4 text-5xl lg:text-9xl">{text}</h1>
			<hr className="w-1/4" />
		</div>
	);
};
