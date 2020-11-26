const express = require('express');
const http = require('http');
const mainRoutes = require('./routes/index');
const env = require('dotenv');
const middlewares = require('./middlewares/index');
const app = express();
const server = http.createServer(app);

middlewares(app);
env.config();

app.use('/', mainRoutes);

app.set('PORT', process.env.PORT || 3000);


server.listen(app.get('PORT'), () => {
	console.log('listening on port ' + app.get('PORT'));
})
