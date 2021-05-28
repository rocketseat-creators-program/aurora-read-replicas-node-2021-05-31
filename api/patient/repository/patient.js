const { sequelize } = require('../../../db')
const Patient = require('../../../db/models/patient')

const findById = id => Patient(sequelize).findOne({ where: { id } })

const create = patient => Patient(sequelize).create(patient)

module.exports = {
  create,
  findById,
}
