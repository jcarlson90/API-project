require('dotenv').config();
require('./congif/database');
const PORT = process.env.PORT || 8000;
const app = require('/app-server.js')

app.listen(PORT, () => {
	console.log('works! ' + PORT)
})

