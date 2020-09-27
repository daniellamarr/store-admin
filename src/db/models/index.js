'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config');
console.log(env)
const envConfig = config[env];
const db = {};
const ssl = process.env.NODE_ENV === 'production';
const genericOptions = {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl
  },
};

let sequelize;
if (process.env.DATABASE_URL) {
/* istanbul ignore next */
  sequelize = new Sequelize(process.env.DATABASE_URL, genericOptions);
} else {
  sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    genericOptions
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
