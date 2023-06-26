import Joi from 'joi';
import { CreateHandBookParams } from '@/services/handbook-service';

export const createHandBookSchema = Joi.object<CreateHandBookParams>({
  professional: Joi.string().required(),
  patient: Joi.string().required(),
  description: Joi.string().required(),
});
