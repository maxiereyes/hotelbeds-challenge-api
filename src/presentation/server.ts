import express from 'express';
import path from 'path';

interface ServerOptions {
    port: number;
    node_env?: string;
    routes: express.Router
}

export class Server {
    private serverListener?: any;
    public readonly app = express();
    private readonly port: number;
    private readonly node_env: string;
    private readonly routes: express.Router

    constructor(options: ServerOptions) {
        const { port, node_env = 'development', routes } = options
        this.port = port
        this.node_env = node_env
        this.routes = routes
    }

    async start() {
        
        // Middlewares
        this.app.use(express.json()) // raw
        this.app.use(express.urlencoded({ extended: true })) // xwww-form-urlencoded
        
        // Routes
        this.app.use(this.routes)

        this.serverListener = this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }

    public close() {
        this.serverListener?.close()
    }
}