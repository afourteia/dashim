import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const TenantMembers = {
  getMany: middleware(async function getMany(
    params?: Prisma.TenantMembersFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.TenantMembersFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.TenantMembersCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.TenantMembersCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.TenantMembersUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.TenantMembersUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.TenantMembersDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.TenantMembersDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.tenantMembers.delete(params)
  }),
}

export default TenantMembers
