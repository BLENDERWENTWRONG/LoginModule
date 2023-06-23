const express = require('express')
const router = express.Router()

const userController = require ('../controllers/userController')


router.get('/all', userController.findAll)
router.post('/add', userController.addUser)
router.post('/find', userController.findUser)
router.post('/update', userController.editUser)
router.post('/delete', userController.deleteUser)

module.exports = router