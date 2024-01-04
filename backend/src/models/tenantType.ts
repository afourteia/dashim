import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { TenantType as TenantTypeType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.TenantTypeFindManyArgs) {
  return await enhancedPrisma(userId).tenantType.findMany(params)
}

async function getOne(userId: string, params: Prisma.TenantTypeFindUniqueArgs) {
  return await enhancedPrisma(userId).tenantType.findUnique(params)
}

async function createMany(userId: string, params: Prisma.TenantTypeCreateManyArgs) {
  return await enhancedPrisma(userId).tenantType.createMany(params)
}

async function createOne(userId: string, params: Prisma.TenantTypeCreateArgs) {
  return await enhancedPrisma(userId).tenantType.create(params)
}

async function updateMany(userId: string, params: Prisma.TenantTypeUpdateManyArgs) {
  return await enhancedPrisma(userId).tenantType.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.TenantTypeUpdateArgs) {
  return await enhancedPrisma(userId).tenantType.update(params)
}

async function deleteMany(userId: string, params: Prisma.TenantTypeDeleteManyArgs) {
  return await enhancedPrisma(userId).tenantType.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.TenantTypeDeleteArgs) {
  return await enhancedPrisma(userId).tenantType.delete(params)
}

export const TenantType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
