import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/dbConfig.js'
import { ClientModel } from './clientModel.js'
import { ContractorModel } from './contractorModel.js'
import { JobModel } from './jobModel.js'

export class ContractModel extends Model {}
ContractModel.init(
  {
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ClientModel,
        key: 'client_id',
      },
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ContractorModel,
        key: 'contractor_id',
      },
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: JobModel,
        key: 'job_id',
      },
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('New', 'In progress', 'Terminated'),
      defaultValue: 'New',
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Contracts',
  }
)
