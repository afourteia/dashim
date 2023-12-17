import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Tenant = {
  getMany: middleware(async function getMany(params?: Prisma.TenantFindManyArgs) {
    return await prisma.tenant.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.TenantFindUniqueArgs) {
    return await prisma.tenant.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.TenantCreateManyArgs
  ) {
    return await prisma.tenant.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.TenantCreateArgs
  ) {
    return await prisma.tenant.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.TenantUpdateManyArgs
  ) {
    return await prisma.tenant.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.TenantUpdateArgs
  ) {
    return await prisma.tenant.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.TenantDeleteManyArgs
  ) {
    return await prisma.tenant.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.TenantDeleteArgs
  ) {
    return await prisma.tenant.delete(params)
  }),
}

export default Tenant
