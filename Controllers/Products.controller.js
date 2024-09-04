const Product = require('../Models/Products.model')


const getProducts= async(req,res)=>{
    try {
       const product = await Product.find(req.body);
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message }); // Send error message if there's an issue
    }
};

const getProduct = async(req,res)=>{
    try {
        const {id} = req.params;
         const product = await Product.findById(id);
         if(!product){
            res.status(404).json({message:"not found"});
         }
         res.status(200).json(product); 

     
     } catch (error) {
         res.status(500).json({ message: error.message }); // Send error message if there's an issue
     }
}

const postProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message }); // Send error message if there's an issue
    }
}

const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
   
     if (!product) {
       return res.status(404).json({ message:"Product not found" }); // Send error message if there's an issue
    }
  
    const updateProduct = await Product.findById(id);
    res.status(201).json(updateProduct); 
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
   
     if (!product) {
       return res.status(404).json({ message:"Product not found" }); // Send error message if there's an issue
    }
  
    const DeleteProduct = await Product.findById(id);
    res.status(200).json({message:'Product Deleted Succufully n'}); 
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}