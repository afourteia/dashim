import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const FingerType = {
  getMany: middleware(async function getMany(
    params?: Prisma.FingerTypeFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.FingerTypeFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.FingerTypeCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.FingerTypeCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.FingerTypeUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.FingerTypeUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.FingerTypeDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.FingerTypeDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerType.delete(params)
  }),
}

export default FingerType
