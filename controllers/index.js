module.exports = {
	set: (app) => {
		require('./main')(app);
		require('./auth')(app);
	}
}
