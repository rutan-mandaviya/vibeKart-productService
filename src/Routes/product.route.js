const express = require('express');
const authMiddleware=require('../Middleware/auth.middleware');
const multer = require('multer');
const productController =require('../Controller/product.controller')
const productValidator=require('../validators/product.validators')

const router=express.Router();
const upload=multer({storage:multer.memoryStorage()});

router.post('/',authMiddleware.CreateauthMiddleware(['admin','seller']),upload.array('images',5),productValidator.createProductValidators,productController.createproduct)
router.get('/', productController.getProducts)

router.patch('/:id',authMiddleware.CreateauthMiddleware(['seller']),productController.updateProduct)
router.delete('/:id',authMiddleware.CreateauthMiddleware(['seller']),productController.deleteProduct)

router.get('/seller',authMiddleware.CreateauthMiddleware(['seller']),productController.getProductsBySeller)
router.get('/:id',productController.getProductbyid)


module.exports=router;