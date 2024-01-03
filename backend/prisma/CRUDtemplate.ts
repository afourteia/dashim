import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { User as UserType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.UserFindManyArgs) {
  return await enhancedPrisma(userId).user.findMany(params)
}

async function getOne(userId: string, params: Prisma.UserFindUniqueArgs) {
  return await enhancedPrisma(userId).user.findUnique(params)
}

async function createMany(userId: string, params: Prisma.UserCreateManyArgs) {
  return await enhancedPrisma(userId).user.createMany(params)
}

async function createOne(userId: string, params: Prisma.UserCreateArgs) {
  return await enhancedPrisma(userId).user.create(params)
}

async function updateMany(userId: string, params: Prisma.UserUpdateManyArgs) {
  return await enhancedPrisma(userId).user.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.UserUpdateArgs) {
  return await enhancedPrisma(userId).user.update(params)
}

async function deleteMany(userId: string, params: Prisma.UserDeleteManyArgs) {
  return await enhancedPrisma(userId).user.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.UserDeleteArgs) {
  return await enhancedPrisma(userId).user.delete(params)
}

export const User = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
