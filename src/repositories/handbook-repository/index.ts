import { Prisma } from '@prisma/client';
import { prisma } from '@/config';


async function create(data: Prisma.HandbookUncheckedCreateInput) {
    return prisma.handbook.create({
      data,
    });
  }

  async function findhandbook() {
    return (await prisma.handbook.findMany()).reverse();
  }
  
  async function findById(handbookId: number) {
    return prisma.handbook.findFirst({
      where: {
        id: handbookId,
      },
    });
  }

  const handbookRepository = {
    create,
    findhandbook,
    findById,
  };
  
  export default handbookRepository;