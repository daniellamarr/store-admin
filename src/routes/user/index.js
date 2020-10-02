import {Router} from 'express';
import CREATE from './create';
import DELETE from './delete';
import LIST from './list';
import READ from './read';
import UPDATE from './update';

const userRoutes = Router();

userRoutes.post('/', CREATE);
userRoutes.put('/:customerId', UPDATE);
userRoutes.delete('/:customerId', DELETE);
userRoutes.get('/', LIST);
userRoutes.get('/:customerId', READ);

export default userRoutes;
