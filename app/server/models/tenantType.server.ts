import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const TenantType = {
  getMany: middleware(async function getMany(
    params?: Prisma.TenantTypeFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.TenantTypeFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.TenantTypeCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.TenantTypeCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.TenantTypeUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.TenantTypeUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.TenantTypeDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.TenantTypeDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantType.delete(params)
  }),
}

export default TenantType
