import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Fingerprint as FingerprintType } from '@prisma/client'

async function getMany(params?: Prisma.FingerprintFindManyArgs) {
  return await prisma.fingerprint.findMany(params)
}

async function getOne(params: Prisma.FingerprintFindUniqueArgs) {
  return await prisma.fingerprint.findUnique(params)
}

async function createMany(params: Prisma.FingerprintCreateManyArgs) {
  return await prisma.fingerprint.createMany(params)
}

async function createOne(params: Prisma.FingerprintCreateArgs) {
  return await prisma.fingerprint.create(params)
}

async function updateMany(params: Prisma.FingerprintUpdateManyArgs) {
  return await prisma.fingerprint.updateMany(params)
}

async function updateOne(params: Prisma.FingerprintUpdateArgs) {
  return await prisma.fingerprint.update(params)
}

async function deleteMany(params: Prisma.FingerprintDeleteManyArgs) {
  return await prisma.fingerprint.deleteMany(params)
}

async function deleteOne(params: Prisma.FingerprintDeleteArgs) {
  return await prisma.fingerprint.delete(params)
}

export const Fingerprint = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
