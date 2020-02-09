import Sequelize, { Model } from "sequelize";

class Investment extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        price: Sequelize.FLOAT,
        date: Sequelize.DATE
      },
      { sequelize }
    );

    return this;
  }
}

export default Investment;
