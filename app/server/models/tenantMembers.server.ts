import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.TenantMembersFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.findMany(params)
}

async function getOne(
  params: Prisma.TenantMembersFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.findUnique(params)
}

async function createMany(
  params: Prisma.TenantMembersCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.createMany(params)
}

async function createOne(
  params: Prisma.TenantMembersCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.create(params)
}

async function updateMany(
  params: Prisma.TenantMembersUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.updateMany(params)
}

async function updateOne(
  params: Prisma.TenantMembersUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.update(params)
}

async function deleteMany(
  params: Prisma.TenantMembersDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.deleteMany(params)
}

async function deleteOne(
  params: Prisma.TenantMembersDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.tenantMembers.delete(params)
}

const TenantMembers = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default TenantMembers
