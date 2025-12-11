
import { Router } from "express";
import { serviceData } from "../controllers/data.js";

const dataRouter = Router();
dataRouter.get("/services-data", serviceData);
export default dataRouter;
