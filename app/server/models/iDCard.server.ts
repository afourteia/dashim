import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.IDCardFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.findMany(params)
}

async function getOne(
  params: Prisma.IDCardFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.findUnique(params)
}

async function createMany(
  params: Prisma.IDCardCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.createMany(params)
}

async function createOne(
  params: Prisma.IDCardCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.create(params)
}

async function updateMany(
  params: Prisma.IDCardUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.updateMany(params)
}

async function updateOne(
  params: Prisma.IDCardUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.update(params)
}

async function deleteMany(
  params: Prisma.IDCardDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.deleteMany(params)
}

async function deleteOne(
  params: Prisma.IDCardDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.iDCard.delete(params)
}

const IDCard = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default IDCard
