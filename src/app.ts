import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import IndexRoutes from './routes/index.routes';
import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes';
import AdressRoutes from './routes/address.routes';

export class App {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use(AuthRoutes);
    this.app.use(UserRoutes);
    this.app.use(AdressRoutes);
  }

  async listen(): Promise<void> {
    await this.app.listen(this.app.get('port'));
  }
}

export default App;
