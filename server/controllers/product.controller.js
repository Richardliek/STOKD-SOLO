const { Product } = require("../models/product.model");


module.exports.createProd = (req, res) => {
    Product.create(req.body)
        .then((newProd) => {
            res.status(201).json(newProd);
        })
        .catch((err) => {
            console.log('error in create product', err);
            res.status(400).json({ message: 'Something went wrong in create pets', errors: err.errors });
        });
}


module.exports.getAllProd = (req, res) => {
    Product.find({})
        .then((products) => {
            res.json({ products })
        })
        .catch((err) => {
            console.log('error in get all product', err);
            res.status(400).json({ message: 'Something went wrong in all pets', errors: err });
        });
}

module.exports.getProd = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(getProd => {
            res.json({ getProd })
        })
        .catch((err) => {
            console.log('error in get product', err);
            res.status(400).json({ message: 'Something went wrong getProd', errors: err });
        });
}


module.exports.updateProd = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id}, req.body,{ new: true, runValidators: true })
        .then(updatedProd => {
            res.json({ updatedProd })
        })
        .catch((err) => {
            console.log('error in update product', err);
            res.status(400).json({ message: 'Something went wrong update prod', errors: err });
        });
}

module.exports.deleteProd = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            console.log('error in delete prod', err);
            res.status(400).json({message: 'Something went wrong delete', errors: err })
        });
}

