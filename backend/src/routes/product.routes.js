import Router from 'express'
import authenticateUser from '../middlewares/auth.middleware.js';
import upload from '../config/multer.config.js';
import { createProduct } from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.post("/create", authenticateUser, upload.single('image'), createProduct)

export default productRouter;