import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/dbConfig.js'
import { ContractorModel } from './contractorModel.js'

export class JobModel extends Model {}
JobModel.init(
  {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ContractorModel,
        key: 'contractor_id'
      }
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('New', 'In progress', 'Terminated'),
      allowNull: true,
      defaultValue: 'New'
    },
    payment_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Jobs'
  }
)
