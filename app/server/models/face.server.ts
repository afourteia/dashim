import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Face as FaceType } from '@prisma/client'

async function getMany(params?: Prisma.FaceFindManyArgs) {
  return await prisma.face.findMany(params)
}

async function getOne(params: Prisma.FaceFindUniqueArgs) {
  return await prisma.face.findUnique(params)
}

async function createMany(params: Prisma.FaceCreateManyArgs) {
  return await prisma.face.createMany(params)
}

async function createOne(params: Prisma.FaceCreateArgs) {
  return await prisma.face.create(params)
}

async function updateMany(params: Prisma.FaceUpdateManyArgs) {
  return await prisma.face.updateMany(params)
}

async function updateOne(params: Prisma.FaceUpdateArgs) {
  return await prisma.face.update(params)
}

async function deleteMany(params: Prisma.FaceDeleteManyArgs) {
  return await prisma.face.deleteMany(params)
}

async function deleteOne(params: Prisma.FaceDeleteArgs) {
  return await prisma.face.delete(params)
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
