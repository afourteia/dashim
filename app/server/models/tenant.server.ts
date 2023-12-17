import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Tenant = {
  getMany: middleware(async function getMany(
    params?: Prisma.TenantFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.TenantFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.TenantCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.TenantCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.TenantUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.TenantUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.TenantDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.TenantDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenant.delete(params)
  }),
}

export default Tenant
