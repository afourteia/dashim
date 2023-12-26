import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { TenantMembers as TenantMembersType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.TenantMembersFindManyArgs) {
  return await enhancedPrisma(userId).tenantMembers.findMany(params)
}

async function getOne(userId: string, params: Prisma.TenantMembersFindUniqueArgs) {
  return await enhancedPrisma(userId).tenantMembers.findUnique(params)
}

async function createMany(userId: string, params: Prisma.TenantMembersCreateManyArgs) {
  return await enhancedPrisma(userId).tenantMembers.createMany(params)
}

async function createOne(userId: string, params: Prisma.TenantMembersCreateArgs) {
  return await enhancedPrisma(userId).tenantMembers.create(params)
}

async function updateMany(userId: string, params: Prisma.TenantMembersUpdateManyArgs) {
  return await enhancedPrisma(userId).tenantMembers.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.TenantMembersUpdateArgs) {
  return await enhancedPrisma(userId).tenantMembers.update(params)
}

async function deleteMany(userId: string, params: Prisma.TenantMembersDeleteManyArgs) {
  return await enhancedPrisma(userId).tenantMembers.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.TenantMembersDeleteArgs) {
  return await enhancedPrisma(userId).tenantMembers.delete(params)
}

export const TenantMembers = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
