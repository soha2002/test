const express = require('express');
const router = express.Router();

const postscontroller = require('../controller/postscontroller')
const userscontroller = require('../controller/userscontroller')
const productcontroller = require('../controller/productcontroller')
const check = require('../middleware/check')
const validation = require ('../middleware/validation')


router.post('/login',validation.login,userscontroller.login )
router.get('/posts',postscontroller.getallposts)
router.get('/add-product', productcontroller.addproduct)
router.post('/signup',validation.signup,userscontroller.signup)
router.post('/users/salarys', userscontroller.getalluserssalary)



module.exports = router