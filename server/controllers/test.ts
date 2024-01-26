import { Request, Response } from 'express';
import { client } from '../app';

export const test = (req: Request, res: Response) => {
	res.status(200).send('Ready to work! [Server Live]');
};
