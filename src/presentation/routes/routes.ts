import { Router } from "express";
import { CommonRoutes } from "./common/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/1.0/common', CommonRoutes.routes)

        return router
    }
}