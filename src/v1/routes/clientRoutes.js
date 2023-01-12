import { Router } from 'express'
import { createNewClient, deleteOneClient, getAllClients, getOneClient, updateOneClient } from '../../controllers/clientController.js'
const router = Router()

router.get('/', getAllClients)
router.get('/:clientId', getOneClient)
router.post('/', createNewClient)
router.put('/:clientId', updateOneClient)
router.delete('/:clientId', deleteOneClient)

export default router
