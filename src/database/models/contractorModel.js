import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config.js'

export class ContractorModel extends Model {}
ContractorModel.init(
  {
    contractor_id: {
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
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Contractors'
  }
)
