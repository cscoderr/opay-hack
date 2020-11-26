const express = reqire('express');

module.exports = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	return app;
}