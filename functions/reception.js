const { google } = require('googleapis');
const sheets = google.sheets('v4');
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

exports.handler = async (event) => {
	const { name, guests } = JSON.parse(event.body);

	try {
		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});
		const values = [[name, guests]];
		const range = 'Reception';

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
