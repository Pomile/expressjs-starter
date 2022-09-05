import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import denv from 'dotenv';
import dbConfig from '../../config/database';

denv.config();

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const modulesPath = path.join(__dirname, "../../modules")
fs.readdirSync(modulesPath).forEach(mod => {
    const modulePath = path.join(modulesPath, mod);
    fs
    .readdirSync(modulePath)
    .filter(file => (file.indexOf('.') !== 0) && (file.includes('model')) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(modulePath, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
 });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
