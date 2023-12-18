import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.TenantMembersFindManyArgs) {
  return await prisma.tenantMembers.findMany(params)
}

async function getOne(params: Prisma.TenantMembersFindUniqueArgs) {
  return await prisma.tenantMembers.findUnique(params)
}

async function createMany(params: Prisma.TenantMembersCreateManyArgs) {
  return await prisma.tenantMembers.createMany(params)
}

async function createOne(params: Prisma.TenantMembersCreateArgs) {
  return await prisma.tenantMembers.create(params)
}

async function updateMany(params: Prisma.TenantMembersUpdateManyArgs) {
  return await prisma.tenantMembers.updateMany(params)
}

async function updateOne(params: Prisma.TenantMembersUpdateArgs) {
  return await prisma.tenantMembers.update(params)
}

async function deleteMany(params: Prisma.TenantMembersDeleteManyArgs) {
  return await prisma.tenantMembers.deleteMany(params)
}

async function deleteOne(params: Prisma.TenantMembersDeleteArgs) {
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
