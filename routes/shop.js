const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop')
const isAuth = require('../middleware/is-auth')

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProduct)

router.get('/cart', isAuth, shopController.getCart)

router.post('/cart', isAuth, shopController.postCart)

router.post('/delete-from-cart', isAuth, shopController.postDeleteFromCart)

router.get('/orders', isAuth, shopController.getOrders)

// router.post('/create-order', isAuth, shopController.postOrder)

router.post('/cancel-order', isAuth, shopController.postDeleteOrder)

router.get('/checkout', isAuth, shopController.getCheckout)

router.get('/checkout/success', shopController.getCheckoutSuccess)

router.get('/checkout/cancel', shopController.getCheckoutCancel)

module.exports = router
