import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.FingerTypeFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.findMany(params)
}

async function getOne(
  params: Prisma.FingerTypeFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.findUnique(params)
}

async function createMany(
  params: Prisma.FingerTypeCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.createMany(params)
}

async function createOne(
  params: Prisma.FingerTypeCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.create(params)
}

async function updateMany(
  params: Prisma.FingerTypeUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.updateMany(params)
}

async function updateOne(
  params: Prisma.FingerTypeUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.update(params)
}

async function deleteMany(
  params: Prisma.FingerTypeDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.deleteMany(params)
}

async function deleteOne(
  params: Prisma.FingerTypeDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerType.delete(params)
}

const FingerType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default FingerType
