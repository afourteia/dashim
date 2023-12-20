import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenterService as MedicalCenterServiceType } from '@prisma/client'

async function getMany(params?: Prisma.MedicalCenterServiceFindManyArgs) {
  return await prisma.medicalCenterService.findMany(params)
}

async function getOne(params: Prisma.MedicalCenterServiceFindUniqueArgs) {
  return await prisma.medicalCenterService.findUnique(params)
}

async function createMany(params: Prisma.MedicalCenterServiceCreateManyArgs) {
  return await prisma.medicalCenterService.createMany(params)
}

async function createOne(params: Prisma.MedicalCenterServiceCreateArgs) {
  return await prisma.medicalCenterService.create(params)
}

async function updateMany(params: Prisma.MedicalCenterServiceUpdateManyArgs) {
  return await prisma.medicalCenterService.updateMany(params)
}

async function updateOne(params: Prisma.MedicalCenterServiceUpdateArgs) {
  return await prisma.medicalCenterService.update(params)
}

async function deleteMany(params: Prisma.MedicalCenterServiceDeleteManyArgs) {
  return await prisma.medicalCenterService.deleteMany(params)
}

async function deleteOne(params: Prisma.MedicalCenterServiceDeleteArgs) {
  return await prisma.medicalCenterService.delete(params)
}

export const MedicalCenterService = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
