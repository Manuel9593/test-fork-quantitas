import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  let hasNecessaryParam = false
  const params = getRouterParam(event, 'params') || ''
  const paramsArray = params.split('/')
  let termParam = paramsArray[0]
  const regionParam = paramsArray[1], typologyParam = paramsArray[2]
  const regionsArray: any[] = []
  if (regionParam && regionParam !== 'italia') {
    const regionsArray = regionParam.split(',')
    for (const el of regionsArray) {
      regionsArray.map((el) => { return { regionSlug: { contains: el } }})
    }
    hasNecessaryParam = true
  }

  if (termParam === 'tutte') {
    termParam = ''
  }

  const facilities: any = await prisma.facility.findMany({
    orderBy: { name: 'asc' },
    where: {
      AND: [
        termParam ? { name: { contains: termParam } } : {},
        typologyParam ? { typologySlug: { contains: typologyParam } } : {}
      ],
      ...(hasNecessaryParam && { OR: regionsArray })
    }
  })
  
  for (const facility of facilities) {
    // check if it has parent and get it
    if (facility.level > 1) {
      const facilityParent: any = await prisma.facility.findUnique({
        where: { code: facility.parentCode }
      })
      facility.parent = facilityParent
      // check if it has grandparent and get it
      if (facilityParent.level > 1) {
        const facilityGrandParent: any = await prisma.facility.findUnique({
          where: { code: facilityParent.parentCode }
        })
        facilityParent.parent = facilityGrandParent
      }
    }
  }
  return facilities
})
