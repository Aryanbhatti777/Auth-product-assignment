import Router from 'express'
import authenticateUser from '../middlewares/auth.middleware.js';
import upload from '../config/multer.config.js';
import { createProduct, getAllProducts, getProduct } from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.post("/create", authenticateUser, upload.single('image'), createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct)

export default productRouter;