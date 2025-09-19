import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/dbConfig.js'

export class ClientModel extends Model {}
ClientModel.init(
  {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Clients'
  }
)
