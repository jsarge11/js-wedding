import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QRCode } from './ui-components';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/reception',
		element: <QRCode />,
	},
]);

root.render(<RouterProvider router={router} />);
