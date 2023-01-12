import { request, response } from 'express'
import Client from '../models/Client.js'
import {
  getAllClients as getAllClientsService,
  getOneClient as getOneClientService,
  createNewClients as createNewClientsService,
  updateOneClient as updateOneClientService,
  deleteOneClient as deleteOneClientService
} from '../services/clientService.js'

const getAllClients = async (req = request, res = response) => {
  const allClients = await getAllClientsService()
  res.json({
    msg: 'Get All Clients',
    allClients
  })
}

const getOneClient = (req = request, res = response) => {
  const client = getOneClientService()
  res.json({
    msg: 'Get One Client'
  })
}

const createNewClient = async (req = request, res = response) => {
  // const { name_client, phone_number, email_client, compay_name } = req.body
  try {
    const createdClient = await createNewClientsService(req.body)
    res.status(201).json({
      msg: 'Client saved successfully',
      createdClient
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Call to the administrator'
    })
  }
}

const updateOneClient = (req = request, res = response) => {
  const updatedClient = updateOneClientService()
  res.json({
    msg: 'Update One Client'
  })
}

const deleteOneClient = (req = request, res = response) => {
  const deletedClient = deleteOneClientService()
  res.json({
    msg: 'Delete One Client'
  })
}

export {
  getAllClients,
  getOneClient,
  createNewClient,
  updateOneClient,
  deleteOneClient
}
