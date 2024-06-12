const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
const wishlistController=require('../Controllers/wishlistController')
const cartController=require('../Controllers/cartContoller')
const jwtMiddle=require('../Middlewarres/jwtmiddleware')
const router=new express.Router()

router.get('/all-products',productController.getAllproducts)
router.get('/get-Product/:id',productController.getProduct)
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addwish',jwtMiddle,wishlistController.addToWishList)
router.get('/getwish',jwtMiddle,wishlistController.getWishList)
router.delete('/remwish/:id',jwtMiddle,wishlistController.removeWishList)
router.post('/addcart',jwtMiddle,cartController.addToCart)
router.get('/getcart',jwtMiddle,cartController.getCartItems)
router.delete('/remcart/:id',jwtMiddle,cartController.removeCartItem)
router.get('/cartinc/:id',jwtMiddle,cartController.incrementCartQuantity)
router.get('/cartdec/:id',jwtMiddle,cartController.decrementCartQuantity)
router.delete('/emptycart',jwtMiddle,cartController.emptyCart)
module.exports=router
