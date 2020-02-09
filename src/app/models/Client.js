export default (Sequelize, DataTypes) => {
  const Client = Sequelize.define("Client", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return Client;
};
