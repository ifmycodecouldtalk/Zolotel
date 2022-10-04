module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.FLOAT
      },
      url: {
        type: Sequelize.STRING
      },
      hot: {
        type: Sequelize.BOOLEAN
      },
      sale: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
};