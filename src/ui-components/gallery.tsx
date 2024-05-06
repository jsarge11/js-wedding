import React, { useLayoutEffect } from 'react';
import { Gallery } from 'react-grid-gallery';
import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';
import gallery6 from '../assets/gallery/gallery-6.jpg';
import gallery7 from '../assets/gallery/gallery-7.jpg';
import gallery8 from '../assets/gallery/gallery-8.jpg';
import gallery9 from '../assets/gallery/gallery-9.jpg';
import gallery10 from '../assets/gallery/gallery-10.jpg';
import gallery11 from '../assets/gallery/gallery-11.jpg';
import gallery12 from '../assets/gallery/gallery-12.jpg';
import gallery13 from '../assets/gallery/gallery-13.jpg';
import gallery14 from '../assets/gallery/gallery-14.jpg';
import gallery15 from '../assets/gallery/gallery-15.jpg';
import gallery16 from '../assets/gallery/gallery-16.jpg';
import gallery17 from '../assets/gallery/gallery-17.jpg';
import gallery18 from '../assets/gallery/gallery-18.jpg';

const imageSrcs = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8,
	gallery9,
	gallery10,
	gallery11,
	gallery12,
	gallery13,
	gallery14,
	gallery15,
	gallery16,
	gallery17,
	gallery18,
];

function getDimensions(imgSrc: string) {
	const newImg = new Image();
	let height = 0;
	let width = 0;

	newImg.onload = function () {
		height = newImg.height;
		width = newImg.width;
	};

	newImg.src = imgSrc;

	return {
		height,
		width,
	};
}

const images = imageSrcs.map((src) => {
	return {
		src,
		...getDimensions(src),
	};
});

// const images = [
// 	{
// 		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
// 		width: 320,
// 		height: 174,
// 	},
// 	{
// 		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 		width: 320,
// 		height: 212,
// 	},
// 	{
// 		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
// 		width: 320,
// 		height: 212,
// 	},
// ];

export const GalleryComponent = () => {
	useLayoutEffect(() => {
		const el = document.getElementById('ReactGridGallery');
		if (el) {
			(el.firstChild as HTMLDivElement).setAttribute(
				'style',
				'display: flex; justify-content: center; flex-wrap: wrap;'
			);
		}
	}, []);
	return (
		<Gallery
			enableImageSelection={false}
			images={images}
			margin={3}
			tileViewportStyle={{ justifyContent: 'center' }}
		/>
	);
};
