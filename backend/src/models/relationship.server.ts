import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Relationship as RelationshipType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.RelationshipFindManyArgs) {
  return await enhancedPrisma(userId).relationship.findMany(params)
}

async function getOne(userId: string, params: Prisma.RelationshipFindUniqueArgs) {
  return await enhancedPrisma(userId).relationship.findUnique(params)
}

async function createMany(userId: string, params: Prisma.RelationshipCreateManyArgs) {
  return await enhancedPrisma(userId).relationship.createMany(params)
}

async function createOne(userId: string, params: Prisma.RelationshipCreateArgs) {
  return await enhancedPrisma(userId).relationship.create(params)
}

async function updateMany(userId: string, params: Prisma.RelationshipUpdateManyArgs) {
  return await enhancedPrisma(userId).relationship.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.RelationshipUpdateArgs) {
  return await enhancedPrisma(userId).relationship.update(params)
}

async function deleteMany(userId: string, params: Prisma.RelationshipDeleteManyArgs) {
  return await enhancedPrisma(userId).relationship.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.RelationshipDeleteArgs) {
  return await enhancedPrisma(userId).relationship.delete(params)
}

export const Relationship = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
