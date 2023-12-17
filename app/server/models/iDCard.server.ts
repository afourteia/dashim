import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const IDCard = {
  getMany: middleware(async function getMany(
    params?: Prisma.IDCardFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.IDCardFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.IDCardCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.IDCardCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.IDCardUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.IDCardUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.IDCardDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.IDCardDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.iDCard.delete(params)
  }),
}

export default IDCard
