import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Face as FaceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.FaceFindManyArgs) {
  return await enhancedPrisma(userId).face.findMany(params)
}

async function getOne(userId: string, params: Prisma.FaceFindUniqueArgs) {
  return await enhancedPrisma(userId).face.findUnique(params)
}

async function createMany(userId: string, params: Prisma.FaceCreateManyArgs) {
  return await enhancedPrisma(userId).face.createMany(params)
}

async function createOne(userId: string, params: Prisma.FaceCreateArgs) {
  return await enhancedPrisma(userId).face.create(params)
}

async function updateMany(userId: string, params: Prisma.FaceUpdateManyArgs) {
  return await enhancedPrisma(userId).face.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.FaceUpdateArgs) {
  return await enhancedPrisma(userId).face.update(params)
}

async function deleteMany(userId: string, params: Prisma.FaceDeleteManyArgs) {
  return await enhancedPrisma(userId).face.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.FaceDeleteArgs) {
  return await enhancedPrisma(userId).face.delete(params)
}

export const Face = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
