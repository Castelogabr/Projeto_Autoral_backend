import { Request, Response } from 'express';
import httpStatus from 'http-status';
import handbookService from '@/services/handbook-service';
import handbookRepository from '@/repositories/handbook-repository';

export async function handbookPost(req: Request, res: Response) {
  const { professional, patient, description } = req.body;

  try {
    await handbookService.createHandBook({ professional, patient, description });
    return res.status(httpStatus.CREATED).json({
        professional,
        patient,
        description
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function handbookGet(req: Request, res: Response) {
  
    try {
        const handbook = await handbookRepository.findhandbook();
        return res.status(httpStatus.OK).send(handbook);
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }

  export async function handbookGetWithId(req: Request, res: Response) {
    const { handbookId } = req.params;

    try {
        const handbook = await handbookRepository.findById(Number(handbookId));
        return res.status(httpStatus.OK).send(handbook);
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }

  
