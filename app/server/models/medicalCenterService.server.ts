import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const MedicalCenterService = {
  getMany: middleware(async function getMany(params?: Prisma.MedicalCenterServiceFindManyArgs) {
    return await prisma.medicalCenterService.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.MedicalCenterServiceFindUniqueArgs) {
    return await prisma.medicalCenterService.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.MedicalCenterServiceCreateManyArgs
  ) {
    return await prisma.medicalCenterService.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.MedicalCenterServiceCreateArgs
  ) {
    return await prisma.medicalCenterService.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.MedicalCenterServiceUpdateManyArgs
  ) {
    return await prisma.medicalCenterService.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.MedicalCenterServiceUpdateArgs
  ) {
    return await prisma.medicalCenterService.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.MedicalCenterServiceDeleteManyArgs
  ) {
    return await prisma.medicalCenterService.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.MedicalCenterServiceDeleteArgs
  ) {
    return await prisma.medicalCenterService.delete(params)
  }),
}

export default MedicalCenterService
