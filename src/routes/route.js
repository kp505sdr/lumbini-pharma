const express=require("express")
const router = new express.Router()
const productController = require("../controllers/productController")
const upload=require("../config/multer")



router.post("/v1/addProduct",upload.single('image'),productController.addProduct)
router.get("/v1/getProduct",productController.getProduct)
router.get("/v1/findProduct/:id",productController.findOneProduct)
router.put("/v1/updateProduct/:id",upload.single('image'),productController.putProduct)
router.delete("/v1/productDelete/:id",productController.productDelete)

module.exports=router;