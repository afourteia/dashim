import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Tenant as TenantType } from '@prisma/client'

async function getMany(params?: Prisma.TenantFindManyArgs) {
  return await prisma.tenant.findMany(params)
}

async function getOne(params: Prisma.TenantFindUniqueArgs) {
  return await prisma.tenant.findUnique(params)
}

async function createMany(params: Prisma.TenantCreateManyArgs) {
  return await prisma.tenant.createMany(params)
}

async function createOne(params: Prisma.TenantCreateArgs) {
  return await prisma.tenant.create(params)
}

async function updateMany(params: Prisma.TenantUpdateManyArgs) {
  return await prisma.tenant.updateMany(params)
}

async function updateOne(params: Prisma.TenantUpdateArgs) {
  return await prisma.tenant.update(params)
}

async function deleteMany(params: Prisma.TenantDeleteManyArgs) {
  return await prisma.tenant.deleteMany(params)
}

async function deleteOne(params: Prisma.TenantDeleteArgs) {
  return await prisma.tenant.delete(params)
}

export const Tenant = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
