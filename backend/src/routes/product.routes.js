import Router from 'express'
import authenticateUser from '../middlewares/auth.middleware.js';
import upload from '../config/multer.config.js';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.post("/create", authenticateUser, upload.single('image'), createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.put("/update/:id", authenticateUser, updateProduct);
productRouter.delete("/delete/:id", authenticateUser, deleteProduct);

export default productRouter;