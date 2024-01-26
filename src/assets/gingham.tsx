import React, { FC } from 'react';

interface GinghamProps {
	isComplete: boolean;
}

export const Gingham: FC<GinghamProps> = ({ isComplete }) => {
	const incompleteButton = (
		<a href="#gate">
			<button className="shadow-lg active:shadow-none bg-white text-black px-12 py-1 text-3xl custom-text-red rounded">
				Click here!
			</button>
		</a>
	);

	const completeButton = (
		<button className="bg-white text-black px-12 py-1 text-3xl custom-text-red rounded">
			Thank you!
		</button>
	);
	return (
		<div className="w-[200%] md:w-[150%] relative">
			<svg
				id="Layer_1"
				viewBox="0 0 1500 1031.26"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink">
				<defs>
					<pattern
						height="52.82"
						id="New_Pattern_Swatch_2"
						patternTransform="translate(-40.98 -16151.49) scale(1 -1)"
						patternUnits="userSpaceOnUse"
						viewBox="0 0 52.82 52.82"
						width="52.82"
						x="0"
						y="0">
						<rect
							height="52.82"
							style={{ fill: 'none', strokeWidth: 0 }}
							width="52.82"
						/>
						<rect
							height="52.82"
							style={{ fill: 'none', strokeWidth: 0 }}
							width="52.82"
						/>
						<polygon
							points="26.41 52.82 0 52.82 0 26.41 26.41 26.41 52.82 26.41 52.82 52.82 26.41 52.82"
							style={{
								fill: '#bd2127',
								isolation: 'isolate',
								opacity: 0.5,
								strokeWidth: 0,
							}}
						/>
						<polygon
							points="0 26.41 0 0 26.41 0 26.41 26.41 26.41 52.82 0 52.82 0 26.41"
							style={{
								fill: '#bd2127',
								isolation: 'isolate',
								opacity: 0.5,
								strokeWidth: 0,
							}}
						/>
					</pattern>
				</defs>
				<rect
					height="515.13"
					style={{ fill: '#c53c3f', strokeWidth: 0 }}
					width="1500"
					y="448.13"
				/>
				<rect height="515.13" style={{ fill: '#c53c3f', strokeWidth: 0 }} width="1500" />
				<rect
					height="515.13"
					style={{ fill: 'url(#New_Pattern_Swatch_2)', strokeWidth: 0 }}
					width="1500"
				/>
				<rect
					height="515.13"
					style={{ fill: 'url(#New_Pattern_Swatch_2)', strokeWidth: 0 }}
					width="1500"
					y="516.13"
				/>
			</svg>
			<div className="absolute top-20 md:top-44 w-6/12 md:w-[65%] text-center xl:top-80">
				<h2 className="text-7xl">We need your</h2>
				<h1 className="text-9xl mt-2 mb-4">address!</h1>
				<div className="h-20 w-px bg-white m-auto mb-8" />
				{isComplete ? completeButton : incompleteButton}
			</div>
		</div>
	);
};
