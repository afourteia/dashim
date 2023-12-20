import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { DeviceType as DeviceTypeType } from '@prisma/client'

async function getMany(params?: Prisma.DeviceTypeFindManyArgs) {
  return await prisma.deviceType.findMany(params)
}

async function getOne(params: Prisma.DeviceTypeFindUniqueArgs) {
  return await prisma.deviceType.findUnique(params)
}

async function createMany(params: Prisma.DeviceTypeCreateManyArgs) {
  return await prisma.deviceType.createMany(params)
}

async function createOne(params: Prisma.DeviceTypeCreateArgs) {
  return await prisma.deviceType.create(params)
}

async function updateMany(params: Prisma.DeviceTypeUpdateManyArgs) {
  return await prisma.deviceType.updateMany(params)
}

async function updateOne(params: Prisma.DeviceTypeUpdateArgs) {
  return await prisma.deviceType.update(params)
}

async function deleteMany(params: Prisma.DeviceTypeDeleteManyArgs) {
  return await prisma.deviceType.deleteMany(params)
}

async function deleteOne(params: Prisma.DeviceTypeDeleteArgs) {
  return await prisma.deviceType.delete(params)
}

export const DeviceType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
