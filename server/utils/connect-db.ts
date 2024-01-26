import { MongoClient, ServerApiVersion } from 'mongodb';

const options = {
	serverApi: ServerApiVersion.v1,
};

export const connectDb = (uri: string) => {
	const client = new MongoClient(uri, options);
	return client;
};
