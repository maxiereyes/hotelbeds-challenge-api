import express from 'express';
import path from 'path';

interface ServerOptions {
    port: number;
    public_path?: string;
    routes: express.Router
}

export class Server {
    private serverListener?: any;
    public readonly app = express();
    private readonly port: number;
    private readonly public_path: string;
    private readonly routes: express.Router

    constructor(options: ServerOptions) {
        const { port, public_path = 'public', routes } = options
        this.port = port
        this.public_path = public_path
        this.routes = routes
    }

    async start() {
        
        // Middlewares
        this.app.use(express.json()) // raw
        this.app.use(express.urlencoded({ extended: true })) // xwww-form-urlencoded

        // Public folder
        this.app.use(express.static(this.public_path))
        
        // Routes
        this.app.use(this.routes)

        // SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `/${ this.public_path }/index.html` );
            res.sendFile(indexPath);
        });

        this.serverListener = this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }

    public close() {
        this.serverListener?.close()
    }
}