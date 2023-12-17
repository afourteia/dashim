import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const MedicalCenter = {
  getMany: middleware(async function getMany(params?: Prisma.MedicalCenterFindManyArgs) {
    return await prisma.medicalCenter.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.MedicalCenterFindUniqueArgs) {
    return await prisma.medicalCenter.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.MedicalCenterCreateManyArgs
  ) {
    return await prisma.medicalCenter.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.MedicalCenterCreateArgs
  ) {
    return await prisma.medicalCenter.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.MedicalCenterUpdateManyArgs
  ) {
    return await prisma.medicalCenter.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.MedicalCenterUpdateArgs
  ) {
    return await prisma.medicalCenter.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.MedicalCenterDeleteManyArgs
  ) {
    return await prisma.medicalCenter.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.MedicalCenterDeleteArgs
  ) {
    return await prisma.medicalCenter.delete(params)
  }),
}

export default MedicalCenter
