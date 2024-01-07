import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { Gender as GenderType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.GenderFindManyArgs) {
  return await enhancedPrisma(userId).gender.findMany(params)
}

async function getOne(userId: string, params: Prisma.GenderFindUniqueArgs) {
  return await enhancedPrisma(userId).gender.findUnique(params)
}

async function createMany(userId: string, params: Prisma.GenderCreateManyArgs) {
  return await enhancedPrisma(userId).gender.createMany(params)
}

async function createOne(userId: string, params: Prisma.GenderCreateArgs) {
  return await enhancedPrisma(userId).gender.create(params)
}

async function updateMany(userId: string, params: Prisma.GenderUpdateManyArgs) {
  return await enhancedPrisma(userId).gender.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.GenderUpdateArgs) {
  return await enhancedPrisma(userId).gender.update(params)
}

async function deleteMany(userId: string, params: Prisma.GenderDeleteManyArgs) {
  return await enhancedPrisma(userId).gender.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.GenderDeleteArgs) {
  return await enhancedPrisma(userId).gender.delete(params)
}

export const Gender = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
