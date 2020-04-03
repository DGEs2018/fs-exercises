const http = require('http');

const app = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Is this what was asked for?');
});

const port = 3001;

const personalPhoneEntry = [
	{
		name: 'Arto Hellas',
		number: '040-123456',
		id: 1
	},
	{
		name: 'Arto Hellas',
		number: '39-44-5323523',
		id: 4
	},
	{
		name: 'Dan Abramov',
		number: '12-43-234345',
		id: 3
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 4
	}
];
app.get('/api/personalPhoneEntry', (req, res) => {
	res.json(personalPhoneEntry);
});
app.listen(port);

console.log(`Server running on port ${port}`);
