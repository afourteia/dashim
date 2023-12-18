import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.DeviceTypeFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.findMany(params)
}

async function getOne(
  params: Prisma.DeviceTypeFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.findUnique(params)
}

async function createMany(
  params: Prisma.DeviceTypeCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.createMany(params)
}

async function createOne(
  params: Prisma.DeviceTypeCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.create(params)
}

async function updateMany(
  params: Prisma.DeviceTypeUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.updateMany(params)
}

async function updateOne(
  params: Prisma.DeviceTypeUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.update(params)
}

async function deleteMany(
  params: Prisma.DeviceTypeDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.deleteMany(params)
}

async function deleteOne(
  params: Prisma.DeviceTypeDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceType.delete(params)
}

const DeviceType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default DeviceType
