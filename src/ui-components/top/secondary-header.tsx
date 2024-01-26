import React, { FC } from 'react';

interface SecondaryHeaderProps {
	id?: string;
}

export const SecondaryHeader: FC<SecondaryHeaderProps> = () => {
	return (
		<div className="flex flex-col items-center justify-between secondary h-80 bg-cover">
			<h1 className="text-7xl mt-14">06.08.24</h1>
			<p className="montserrat uppercase mt-8 mb-4">Springville Museum of Art – Utah</p>
		</div>
	);
};
