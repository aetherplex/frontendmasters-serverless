const fetch = require('node-fetch');

async function query({ query, variables = {} }) {
	const result = await fetch(process.env.HASURA_GRAPHQL_DATABASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Hasura-Admin-Secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
		},
		body: JSON.stringify({ query, variables }),
	}).then((response) => response.json());

	// TODO: show helpful info if there is an error
	// result.errors

	return result.data;
}

exports.query = query;
