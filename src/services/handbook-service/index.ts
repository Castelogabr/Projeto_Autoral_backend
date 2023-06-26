import { Handbook } from '@prisma/client';
import handbookRepository from '../../repositories/handbook-repository';

export async function createHandBook({ professional, patient, description }: CreateHandBookParams): Promise<Handbook> {
  
    return handbookRepository.create({
        professional,
        patient,
        description,
    });
  }

  export type CreateHandBookParams = Pick<Handbook, 'professional' | 'patient' | 'description' >;

  const handbookService = {
    createHandBook,
  };
  
  
  export default handbookService;
  