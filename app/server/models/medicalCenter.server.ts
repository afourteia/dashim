import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.MedicalCenterFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.findMany(params)
}

async function getOne(
  params: Prisma.MedicalCenterFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.findUnique(params)
}

async function createMany(
  params: Prisma.MedicalCenterCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.createMany(params)
}

async function createOne(
  params: Prisma.MedicalCenterCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.create(params)
}

async function updateMany(
  params: Prisma.MedicalCenterUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.updateMany(params)
}

async function updateOne(
  params: Prisma.MedicalCenterUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.update(params)
}

async function deleteMany(
  params: Prisma.MedicalCenterDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.deleteMany(params)
}

async function deleteOne(
  params: Prisma.MedicalCenterDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenter.delete(params)
}

const MedicalCenter = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default MedicalCenter
