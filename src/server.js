import express from "express";
import morgan from "morgan";
import { initMongoDB } from "./daos/mongodb/connection.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import ProductsRouter  from "./routes/product.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/products', ProductsRouter);

app.use(errorHandler);

initMongoDB();

const port = 8080;
app.listen(port, () => console.log(`Server listen in port_ ${port}`));
