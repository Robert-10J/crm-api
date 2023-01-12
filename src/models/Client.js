import { DataTypes } from 'sequelize'
import db from '../db/database.js'

const Client = db.define('clients', {
  name_client: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email_client: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Client
