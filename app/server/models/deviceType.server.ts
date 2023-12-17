import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const DeviceType = {
  getMany: middleware(async function getMany(params?: Prisma.DeviceTypeFindManyArgs) {
    return await prisma.deviceType.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.DeviceTypeFindUniqueArgs) {
    return await prisma.deviceType.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.DeviceTypeCreateManyArgs
  ) {
    return await prisma.deviceType.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.DeviceTypeCreateArgs
  ) {
    return await prisma.deviceType.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.DeviceTypeUpdateManyArgs
  ) {
    return await prisma.deviceType.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.DeviceTypeUpdateArgs
  ) {
    return await prisma.deviceType.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.DeviceTypeDeleteManyArgs
  ) {
    return await prisma.deviceType.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.DeviceTypeDeleteArgs
  ) {
    return await prisma.deviceType.delete(params)
  }),
}

export default DeviceType
