const { google } = require('googleapis');
const sheets = google.sheets('v4');
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

exports.handler = async (event) => {
	const {
		isOutsideUSA: isOutside,
		fullAddress,
		name,
		address,
		addressTwo,
		city,
		state,
		zip,
	} = JSON.parse(event.body);

	const isOutsideUSA = Boolean(isOutside);

	try {
		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});
		const values = isOutsideUSA
			? [[name, fullAddress]]
			: [[name, address, addressTwo, city, state, zip]];
		const range = isOutsideUSA ? 'Outside USA' : 'USA';

		await sheets.spreadsheets.values.append({
			auth,
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range,
			valueInputOption: 'RAW',
			insertDataOption: 'INSERT_ROWS',
			resource: {
				values,
			},
		});

		return {
			statusCode: 200,
		};
	} catch (err) {
		return {
			statusCode: 500,
			err,
		};
	}
};
