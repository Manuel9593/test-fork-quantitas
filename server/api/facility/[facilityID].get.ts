import { PrismaClient } from "@prisma/client"
import facilities from "~/prisma/data/facilities"
const prisma = new PrismaClient()

const checkHigherParents = async (facility: any, checkLevel: number): Promise<any> => {
  if(facility.level > 1 && checkLevel < 2){
    return prisma.facility.findUnique({ where: { code: facility.parentCode }})
    .then(async (dataParent) => {
      facility.parent = await checkHigherParents(dataParent, checkLevel++)
      return facility
    })
  }
  return facility
}

const checkLowerChildren = async (facility: any) => {
  if (facility > 3)
    return prisma.facility.findMany({ where: { parentCode: facility.code }})
    .then((data) => {
      facility.children = data
      return facility
    })
  return facility
}

export default defineEventHandler(async (event) => {
  const facilityID: number = Number(getRouterParam(event, 'facilityID'))
  if (!facilityID) {
    throw createError({ statusCode: 404 })
  }
  return prisma.facility.findUnique({
    where: { id: facilityID }
  })
  .then(async (data) => {
    const resultWithParents = await checkHigherParents(data, 0)
    return checkLowerChildren(resultWithParents)
  })
  .catch(() => {
    return createError({ statusCode: 404 })
  })
})
