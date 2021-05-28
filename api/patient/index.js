const patientRepository = require('./repository/patient')

const getPatientInfo = async patientId => patientRepository.findById(patientId)

const createPatient = async (name, document) => {
  const patient = await patientRepository.create({ name, document })

  return patient
}

module.exports = {
  getPatientInfo,
  createPatient,
}
