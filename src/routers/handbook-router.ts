import { Router } from 'express';

import { createHandBookSchema } from '@/schemas/handbook';
import { validateBody } from '@/middlewares';
import { handbookPost, handbookGet, handbookGetWithId } from '@/controllers/handbook-controller';

const handbookRouter = Router();

handbookRouter.post('/', validateBody(createHandBookSchema), handbookPost);
handbookRouter.get('/', handbookGet)
handbookRouter.get('/:handbookId', handbookGetWithId)

export { handbookRouter };

