import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Role as RoleType } from '@prisma/client'

async function getMany(params?: Prisma.RoleFindManyArgs) {
  return await prisma.role.findMany(params)
}

async function getOne(params: Prisma.RoleFindUniqueArgs) {
  return await prisma.role.findUnique(params)
}

async function createMany(params: Prisma.RoleCreateManyArgs) {
  return await prisma.role.createMany(params)
}

async function createOne(params: Prisma.RoleCreateArgs) {
  return await prisma.role.create(params)
}

async function updateMany(params: Prisma.RoleUpdateManyArgs) {
  return await prisma.role.updateMany(params)
}

async function updateOne(params: Prisma.RoleUpdateArgs) {
  return await prisma.role.update(params)
}

async function deleteMany(params: Prisma.RoleDeleteManyArgs) {
  return await prisma.role.deleteMany(params)
}

async function deleteOne(params: Prisma.RoleDeleteArgs) {
  return await prisma.role.delete(params)
}

export const Role = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
