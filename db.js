const config = require('./config');
const Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.type, config.name, config.myPostgres);
require('sequelize-values')(sequelize);

module.exports = sequelize;
