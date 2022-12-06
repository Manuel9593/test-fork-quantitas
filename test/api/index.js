import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/facilities/:facilitesTerm?/:regions?/:typology?', async (req, res) => {
  let hasParams = false
  const filterParams = []

  if (req.params.regions && req.params.regions !== 'italia') {
    const regionsArray = req.params.regions.split(',')
    for (const el of regionsArray) {
      filterParams.push({ regionSlug: { contains: el } })
    }
    hasParams = true
  }

  if (req.params.facilitesTerm === 'tutte') {
    req.params.facilitesTerm = ''
  }

  const facilities = await prisma.facility.findMany({
    orderBy: { name: 'asc' },
    where: {
      AND: [
        req.params.facilitesTerm ? { name: { contains: req.params.facilitesTerm } } : {},
        req.params.typology ? { typologySlug: { contains: req.params.typology } } : {}
      ],
      OR: !hasParams ? undefined : filterParams
    }
  })

  for await (const facility of facilities) {
    // check if it has parent and get it
    if (facility.level > 1) {
      const facilityParent = await prisma.facility.findUnique({
        where: { code: facility.parentCode }
      })
      facility.parent = facilityParent
      // check if it has grandparent and get it
      if (facilityParent.level > 1) {
        const facilityGrandParent = await prisma.facility.findUnique({
          where: { code: facilityParent.parentCode }
        })
        facility.grandParent = facilityGrandParent
      } else {
        facility.grandParent = null
      }
    } else {
      facility.parent = null
    }
  }
  res.json(facilities)
})

app.get('/facility/:facilityId', async (req, res) => {
  // it comes as String
  const id = parseInt(req.params.facilityId)
  // return 404 if `id` isn't a number
  if (isNaN(id)) {
    return res.sendStatus(404)
  }
  const facility = await prisma.facility.findUnique({
    where: { id }
  })
  // return 404 if no facility
  if (!facility) {
    return res.sendStatus(404)
  }
  // check if it has parent and get it
  if (facility.level > 1) {
    const facilityParent = await prisma.facility.findUnique({
      where: { code: facility.parentCode }
    })
    facility.parent = facilityParent
    // check if it has grandparent and get it
    if (facilityParent.level > 1) {
      const facilityGrandParent = await prisma.facility.findUnique({
        where: { code: facilityParent.parentCode }
      })
      facility.grandParent = facilityGrandParent
    } else {
      facility.grandParent = null
    }
  } else {
    facility.parent = null
  }
  // check if it has child
  if (facility.level < 3) {
    const facilitiesChilds = await prisma.facility.findMany({
      where: { parentCode: facility.code }
    })
    facility.childs = facilitiesChilds
  } else {
    facility.childs = null
  }

  res.json(facility)
})

app.get('/facilities-diagram', async (req, res) => {
  const facilities = await prisma.facility.findMany({
    orderBy: { name: 'asc' },
    where: { level: 1 }
  })
  const response = {
    value: 'Ministero Beni Culturali',
    id: 0,
    hasChildren: true,
    children: []
  }
  for (const facility of facilities) {
    response.children.push({ code: facility.code, value: facility.name, id: facility.id, hasChildren: true, children: [] })
  }
  const allFacilities = await prisma.facility.findMany({})
  // level 2
  for (const facility of response.children) {
    allFacilities.forEach((element) => {
      if (element.parentCode === facility.code) {
        facility.children.push({ code: element.code, value: element.name, id: element.id })
        // level 3
        // for (const facilityChild of facility.children) {
        //   allFacilities.forEach((element) => {
        //     facilityChild.children.push({ code: element.code, value: element.name, id: element.id, hasChildren: false })
        //   })
        // }
      }
    })
  }
  res.json(response)
})

export default {
  path: '/api',
  handler: app
}

app.get('/regions', async (_req, res) => {
  const facilities = await prisma.region.findMany({ })
  res.json(facilities)
})

app.get('/typologies', async (_req, res) => {
  const types = await prisma.type.findMany({ })
  res.json(types)
})
