import {validationResult} from "express-validator"
import imageKit from "../config/imagekit.config.js";
import productModel from "../models/product.model.js";

export const createProduct = async (req, res) => {
    
    try {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const { name, price, description, category, stock } = req.body;

        if (!req.file) {
            return res.status(409).json({
                message: "Please upload the photo"
            })
        }

        const result = await imageKit.upload({
            file: req.file.buffer.toString('base64'),
            fileName: req.file.originalname,
            folder: '/products'
        });

        const image = result.url

        const product = await productModel.create({
            name,
            price,
            description,
            category,
            stock,
            image
        })

        return res.status(201).json({
            message: "Product created successfully",
            product
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

export const getAllProducts = async (req, res) => {
    
    try {
        
        const products = await productModel.find();

        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

export const getProduct = async (req, res) => {

    try {
        
        const { id } = req.params;

        const product = await productModel.findById(id);

        return res.status(200).json({
            message: "Product fetched successfully",
            product
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}