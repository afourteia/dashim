import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.TenantTypeFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.findMany(params)
}

async function getOne(
  params: Prisma.TenantTypeFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.findUnique(params)
}

async function createMany(
  params: Prisma.TenantTypeCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.createMany(params)
}

async function createOne(
  params: Prisma.TenantTypeCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.create(params)
}

async function updateMany(
  params: Prisma.TenantTypeUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.updateMany(params)
}

async function updateOne(
  params: Prisma.TenantTypeUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.update(params)
}

async function deleteMany(
  params: Prisma.TenantTypeDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.deleteMany(params)
}

async function deleteOne(
  params: Prisma.TenantTypeDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantType.delete(params)
}

const TenantType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default TenantType
