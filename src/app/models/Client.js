import Sequelize, { Model } from "sequelize";

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING
      },
      { sequelize }
    );

    return this;
  }
}

export default Client;
