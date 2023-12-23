import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Fingerprint as FingerprintType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.FingerprintFindManyArgs) {
  return await enhancedPrisma(userId).fingerprint.findMany(params)
}

async function getOne(userId: string, params: Prisma.FingerprintFindUniqueArgs) {
  return await enhancedPrisma(userId).fingerprint.findUnique(params)
}

async function createMany(userId: string, params: Prisma.FingerprintCreateManyArgs) {
  return await enhancedPrisma(userId).fingerprint.createMany(params)
}

async function createOne(userId: string, params: Prisma.FingerprintCreateArgs) {
  return await enhancedPrisma(userId).fingerprint.create(params)
}

async function updateMany(userId: string, params: Prisma.FingerprintUpdateManyArgs) {
  return await enhancedPrisma(userId).fingerprint.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.FingerprintUpdateArgs) {
  return await enhancedPrisma(userId).fingerprint.update(params)
}

async function deleteMany(userId: string, params: Prisma.FingerprintDeleteManyArgs) {
  return await enhancedPrisma(userId).fingerprint.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.FingerprintDeleteArgs) {
  return await enhancedPrisma(userId).fingerprint.delete(params)
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
