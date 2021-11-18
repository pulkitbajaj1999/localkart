const SequelizeClass = require('sequelize')
const sequelize = require('../util/database')

const Cart = sequelize.define('cart', {
  id: {
    type: SequelizeClass.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
})

module.exports = Cart
