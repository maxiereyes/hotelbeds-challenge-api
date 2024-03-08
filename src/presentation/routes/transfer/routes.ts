import { Router } from "express";
import { envs } from "../../../config/envs";
import { TransferImplementationDatasource } from "../../../infrastructure/datasources";
import { TransferImplementationRepository } from "../../../infrastructure/repositories";
import { TransferController } from "../../controllers";

export class TransferRoutes {
    static get routes(): Router {
        const router = Router();

        const transferDatasourceImple = new TransferImplementationDatasource(envs.API_URL)
        const transferRepositoryImple = new TransferImplementationRepository(transferDatasourceImple)
        const transferController = new TransferController(transferRepositoryImple)

        router.get('/availability', transferController.getAvailability)
        router.post('/bookings', transferController.createBooking)

        return router
    }
}