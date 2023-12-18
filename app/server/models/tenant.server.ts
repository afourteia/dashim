import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.TenantFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.findMany(params)
}

async function getOne(
  params: Prisma.TenantFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.findUnique(params)
}

async function createMany(
  params: Prisma.TenantCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.createMany(params)
}

async function createOne(
  params: Prisma.TenantCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.create(params)
}

async function updateMany(
  params: Prisma.TenantUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.updateMany(params)
}

async function updateOne(
  params: Prisma.TenantUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.update(params)
}

async function deleteMany(
  params: Prisma.TenantDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.deleteMany(params)
}

async function deleteOne(
  params: Prisma.TenantDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenant.delete(params)
}

const Tenant = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Tenant
