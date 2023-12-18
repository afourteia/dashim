import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.FingerprintFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.findMany(params)
}

async function getOne(
  params: Prisma.FingerprintFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.findUnique(params)
}

async function createMany(
  params: Prisma.FingerprintCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.createMany(params)
}

async function createOne(
  params: Prisma.FingerprintCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.create(params)
}

async function updateMany(
  params: Prisma.FingerprintUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.updateMany(params)
}

async function updateOne(
  params: Prisma.FingerprintUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.update(params)
}

async function deleteMany(
  params: Prisma.FingerprintDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.deleteMany(params)
}

async function deleteOne(
  params: Prisma.FingerprintDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.fingerprint.delete(params)
}

const Fingerprint = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Fingerprint
