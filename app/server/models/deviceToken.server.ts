import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.DeviceTokenFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.findMany(params)
}

async function getOne(
  params: Prisma.DeviceTokenFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.findUnique(params)
}

async function createMany(
  params: Prisma.DeviceTokenCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.createMany(params)
}

async function createOne(
  params: Prisma.DeviceTokenCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.create(params)
}

async function updateMany(
  params: Prisma.DeviceTokenUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.updateMany(params)
}

async function updateOne(
  params: Prisma.DeviceTokenUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.update(params)
}

async function deleteMany(
  params: Prisma.DeviceTokenDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.deleteMany(params)
}

async function deleteOne(
  params: Prisma.DeviceTokenDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.deviceToken.delete(params)
}

const DeviceToken = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default DeviceToken
