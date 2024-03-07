import { Router } from "express";
import { envs } from "../../../config/envs";
import { CommonController } from "../../controllers";
import { CommonImplementationRepository } from "../../../infrastructure/repositories";
import { CommonImplementationDatasource } from "../../../infrastructure/datasources";

export class CommonRoutes {
    static get routes(): Router {
        const router = Router();

        const commonDatasourceImple = new CommonImplementationDatasource(envs.API_URL)
        const commonRepositoryImple = new CommonImplementationRepository(commonDatasourceImple)
        const commonController = new CommonController(commonRepositoryImple)

        router.get('/hotels', commonController.getHotels)
        router.get('/terminals', commonController.getTerminals)
        router.get('/destinations', commonController.getDestinations)

        return router
    }
}