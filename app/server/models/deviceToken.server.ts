import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { DeviceToken as DeviceTokenType } from '@prisma/client'

async function getMany(params?: Prisma.DeviceTokenFindManyArgs) {
  return await prisma.deviceToken.findMany(params)
}

async function getOne(params: Prisma.DeviceTokenFindUniqueArgs) {
  return await prisma.deviceToken.findUnique(params)
}

async function createMany(params: Prisma.DeviceTokenCreateManyArgs) {
  return await prisma.deviceToken.createMany(params)
}

async function createOne(params: Prisma.DeviceTokenCreateArgs) {
  return await prisma.deviceToken.create(params)
}

async function updateMany(params: Prisma.DeviceTokenUpdateManyArgs) {
  return await prisma.deviceToken.updateMany(params)
}

async function updateOne(params: Prisma.DeviceTokenUpdateArgs) {
  return await prisma.deviceToken.update(params)
}

async function deleteMany(params: Prisma.DeviceTokenDeleteManyArgs) {
  return await prisma.deviceToken.deleteMany(params)
}

async function deleteOne(params: Prisma.DeviceTokenDeleteArgs) {
  return await prisma.deviceToken.delete(params)
}

export const DeviceToken = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
