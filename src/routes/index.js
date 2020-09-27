import {Router} from 'express';
import plotRoutes from './plot';
import userRoutes from './user';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/plot', plotRoutes);

export default routes;
