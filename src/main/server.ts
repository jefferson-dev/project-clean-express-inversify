import 'reflect-metadata';
import { Request, Response, NextFunction, Application, urlencoded, json } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { IoC } from './container';
import '../application/controllers';

const server: InversifyExpressServer = new InversifyExpressServer(new IoC().build());

const serverConfig = (app: Application) => {
  app.use(urlencoded({ extended: true }));
  app.use(json());
};

const errorConfig = (app: Application) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
};

server
  .setConfig(serverConfig)
  .setErrorConfig(errorConfig)
  .build()
  .listen(3000, () => console.log('Servidor iniciado na porta 3000'));
