import Sequelize, { Model } from "sequelize";

class Income extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        value: Sequelize.FLOAT,
        client_id: Sequelize.INTEGER
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: "client_id", as: "client" });
  }
}

export default Income;
