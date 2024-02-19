product = require("../models/products");
const cloudinary = require("../config/cloudinary");
const products = require("../models/products");
exports.addProduct = async (req, res) => {
  
 
  const { name, mrp, price, company, category, stock, discount } = req.body;

  try {
    
     
    cloudinary.uploader.upload(req.file.path, (err, result) => {
      const cloudImgURL = result?.url;

      if (cloudImgURL) {
        const allproduct = new products({
          name,
          mrp,
          price,
          company,
          category,
          stock,
          discount,
          images: cloudImgURL,
        });
       
        const saveProduct =allproduct.save();
        res.status(200).send(saveProduct); 
      }
    });

  } catch (error) {
    console.log("Somthing went wrong"+error)
  }
};

exports.getProduct = async (req, res) => {
  try {
    const allproduct = await products.find();

    res.status(200).json({
      success: true,
      allproduct,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.findOneProduct = async (req, res) => {
  try {
    const findproduct = await products.findById(req.params.id);
    res.status(200).json({
      success: true,
      findproduct,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.putProduct = async (req, res) => {
 
  
  try {
          let updatedProduct = await products.findById(req.params.id);
          if (!updatedProduct) {
            return res.status(404).json({
              success: false,
              message: "Product not found",
            });
          }
          updatedProduct = await products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          });
          res.status(200).json({
            success: true,
            updatedProduct,
          });
        
      
    

    // ------------

 
    
  } catch (error) {
    
  }
  
};

exports.productDelete = async (req, res) => {
  const deleteProduct = await products.findById(req.params.id);
  if (!deleteProduct) {
    return res.status(400).json({
      success: false,
      message: "product not found",
    });
  }
  await deleteProduct.deleteOne();
  res.status(200).json({
    success: true,
    message: "product Deleted Successfully",
  });
};
