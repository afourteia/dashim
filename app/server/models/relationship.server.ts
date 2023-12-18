import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.RelationshipFindManyArgs) {
  return await prisma.relationship.findMany(params)
}

async function getOne(params: Prisma.RelationshipFindUniqueArgs) {
  return await prisma.relationship.findUnique(params)
}

async function createMany(params: Prisma.RelationshipCreateManyArgs) {
  return await prisma.relationship.createMany(params)
}

async function createOne(params: Prisma.RelationshipCreateArgs) {
  return await prisma.relationship.create(params)
}

async function updateMany(params: Prisma.RelationshipUpdateManyArgs) {
  return await prisma.relationship.updateMany(params)
}

async function updateOne(params: Prisma.RelationshipUpdateArgs) {
  return await prisma.relationship.update(params)
}

async function deleteMany(params: Prisma.RelationshipDeleteManyArgs) {
  return await prisma.relationship.deleteMany(params)
}

async function deleteOne(params: Prisma.RelationshipDeleteArgs) {
  return await prisma.relationship.delete(params)
}

const Relationship = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Relationship
