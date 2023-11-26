const product = require('../models/productModel');

const multer = require('multer');

// Set up storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name
    },
  });

const upload = multer({ storage: storage });

exports.create = (req,res) => {

    const uploadMiddleware = upload.single('image');

    uploadMiddleware(req, res, (err) => {
        if (err) {
            return res.status(500).send({
                message: "Error uploading file",
            });
        }
    });   

    // Validate request
     if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a product
    const product = new product({
        productName: req.body.productName || "Untitled productName", 
        productDescription: req.body.productDescription,
        productImage : req.productImage,
        category : req.body.category
    });

    // Save Note in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the product."
        });
    });
}

// Find all the products with a category
exports.findByCategory = (req,res) => {

    product.find({ category : req.body.category})
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
}

// Find a single product with a productId
exports.findOne = (req, res) => {
    product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.productId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

     // Create a product
    const product = new product({
        productName: req.body.productName || "Untitled productName", 
        productDescription: req.body.productDescription,
        category : req.body.category
    });

    // Find note and update it with the request body
    product.findByIdAndUpdate(req.params.noteId, {
        productName: req.body.productName || "Untitled productName", 
        productDescription: req.body.productDescription,
        category : req.body.category
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.productId
        });
    });
};