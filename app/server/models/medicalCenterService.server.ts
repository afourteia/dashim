import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.MedicalCenterServiceFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.findMany(params)
}

async function getOne(
  params: Prisma.MedicalCenterServiceFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.findUnique(params)
}

async function createMany(
  params: Prisma.MedicalCenterServiceCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.createMany(params)
}

async function createOne(
  params: Prisma.MedicalCenterServiceCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.create(params)
}

async function updateMany(
  params: Prisma.MedicalCenterServiceUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.updateMany(params)
}

async function updateOne(
  params: Prisma.MedicalCenterServiceUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.update(params)
}

async function deleteMany(
  params: Prisma.MedicalCenterServiceDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.deleteMany(params)
}

async function deleteOne(
  params: Prisma.MedicalCenterServiceDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterService.delete(params)
}

const MedicalCenterService = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default MedicalCenterService
