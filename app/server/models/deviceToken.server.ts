import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const DeviceToken = {
  getMany: middleware(async function getMany(params?: Prisma.DeviceTokenFindManyArgs) {
    return await prisma.deviceToken.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.DeviceTokenFindUniqueArgs) {
    return await prisma.deviceToken.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.DeviceTokenCreateManyArgs
  ) {
    return await prisma.deviceToken.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.DeviceTokenCreateArgs
  ) {
    return await prisma.deviceToken.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.DeviceTokenUpdateManyArgs
  ) {
    return await prisma.deviceToken.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.DeviceTokenUpdateArgs
  ) {
    return await prisma.deviceToken.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.DeviceTokenDeleteManyArgs
  ) {
    return await prisma.deviceToken.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.DeviceTokenDeleteArgs
  ) {
    return await prisma.deviceToken.delete(params)
  }),
}

export default DeviceToken
