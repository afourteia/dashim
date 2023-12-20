import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { TenantType as TenantTypeType } from '@prisma/client'

async function getMany(params?: Prisma.TenantTypeFindManyArgs) {
  return await prisma.tenantType.findMany(params)
}

async function getOne(params: Prisma.TenantTypeFindUniqueArgs) {
  return await prisma.tenantType.findUnique(params)
}

async function createMany(params: Prisma.TenantTypeCreateManyArgs) {
  return await prisma.tenantType.createMany(params)
}

async function createOne(params: Prisma.TenantTypeCreateArgs) {
  return await prisma.tenantType.create(params)
}

async function updateMany(params: Prisma.TenantTypeUpdateManyArgs) {
  return await prisma.tenantType.updateMany(params)
}

async function updateOne(params: Prisma.TenantTypeUpdateArgs) {
  return await prisma.tenantType.update(params)
}

async function deleteMany(params: Prisma.TenantTypeDeleteManyArgs) {
  return await prisma.tenantType.deleteMany(params)
}

async function deleteOne(params: Prisma.TenantTypeDeleteArgs) {
  return await prisma.tenantType.delete(params)
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
