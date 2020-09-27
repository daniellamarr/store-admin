import {Router} from 'express';
import CREATE from './create';
import DELETE from './delete';
import LIST from './list';
import READ from './read';
import UPDATE from './update';

const userRoutes = Router();

userRoutes.post('/', CREATE);
userRoutes.put('/:userId', UPDATE);
userRoutes.delete('/:userId', DELETE);
userRoutes.get('/', LIST);
userRoutes.get('/:userId', READ);

export default userRoutes;
