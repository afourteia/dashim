import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Fingerprint = {
  getMany: middleware(async function getMany(
    params?: Prisma.FingerprintFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.FingerprintFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.FingerprintCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.FingerprintCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.FingerprintUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.FingerprintUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.FingerprintDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.FingerprintDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.fingerprint.delete(params)
  }),
}

export default Fingerprint
