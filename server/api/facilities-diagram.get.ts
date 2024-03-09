import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  return prisma.facility.findMany({
    orderBy: { name: 'asc' },
    where: { level: 1 }
  })
})
