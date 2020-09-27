import {Router} from 'express';
import CREATE from './create';

const plotRoutes = Router();

plotRoutes.post('/', CREATE);

export default plotRoutes;
