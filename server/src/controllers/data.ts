import type { Response, Request } from "express";
import { ServiceModel } from "../models/Service.js"

export const serviceData = async (req: Request,res: Response) => {
    try {
        const serviceData = await ServiceModel.find({})
        res.status(200).json(serviceData)
    } catch (error) {
         res.status(500).json({ error: true, message: 'Error fetching service data' });
    }
}