import { envs } from "./config/envs"
import { AppRoutes } from "./presentation/routes/routes"
import { Server } from "./presentation/server"


(async () => {
    main()
})()

function main(){
    const server = new Server({
        port: envs.PORT, 
        node_env: envs.NODE_ENV,
        routes: AppRoutes.routes})

    server.start()
}