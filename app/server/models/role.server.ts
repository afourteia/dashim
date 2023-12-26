import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Role as RoleType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.RoleFindManyArgs) {
  return await enhancedPrisma(userId).role.findMany(params)
}

async function getOne(userId: string, params: Prisma.RoleFindUniqueArgs) {
  return await enhancedPrisma(userId).role.findUnique(params)
}

async function createMany(userId: string, params: Prisma.RoleCreateManyArgs) {
  return await enhancedPrisma(userId).role.createMany(params)
}

async function createOne(userId: string, params: Prisma.RoleCreateArgs) {
  return await enhancedPrisma(userId).role.create(params)
}

async function updateMany(userId: string, params: Prisma.RoleUpdateManyArgs) {
  return await enhancedPrisma(userId).role.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.RoleUpdateArgs) {
  return await enhancedPrisma(userId).role.update(params)
}

async function deleteMany(userId: string, params: Prisma.RoleDeleteManyArgs) {
  return await enhancedPrisma(userId).role.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.RoleDeleteArgs) {
  return await enhancedPrisma(userId).role.delete(params)
}

export const Role = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
