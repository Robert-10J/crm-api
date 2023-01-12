import Client from '../models/Client.js'

const getAllClients = async () => {
  const allClients = await Client.findAll()
  return allClients
}

const getOneClient = async client => {
  const createClient = ''
  return createClient
}

const createNewClients = async client => {
  const createClient = await Client.create(client)
  return createClient
}

const updateOneClient = () => {
  return
}
const deleteOneClient = () => {
  return
}

export {
  getAllClients,
  getOneClient,
  createNewClients,
  updateOneClient,
  deleteOneClient
}
