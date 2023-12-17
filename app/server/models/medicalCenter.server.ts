import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const MedicalCenter = {
  getMany: middleware(async function getMany(
    params?: Prisma.MedicalCenterFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.MedicalCenterFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.MedicalCenterCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.MedicalCenterCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.MedicalCenterUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.MedicalCenterUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.MedicalCenterDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.MedicalCenterDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenter.delete(params)
  }),
}

export default MedicalCenter
