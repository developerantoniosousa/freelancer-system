import Sequelize from "sequelize";

import Client from "../app/models/Client";
import Income from "../app/models/Income";
import Investment from "../app/models/Investment";

import databaseConfig from "../config/database";

const models = [Client, Income, Investment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
