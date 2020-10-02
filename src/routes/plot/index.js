import {Router} from 'express';
import CREATE from './create';
import REALLOCATE from './reallocate';

const plotRoutes = Router();

plotRoutes.post('/', CREATE);
plotRoutes.put('/reallocate', REALLOCATE);

export default plotRoutes;
