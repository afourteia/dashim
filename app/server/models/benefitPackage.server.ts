import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.BenefitPackageFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.findMany(params)
}

async function getOne(
  params: Prisma.BenefitPackageFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.findUnique(params)
}

async function createMany(
  params: Prisma.BenefitPackageCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.createMany(params)
}

async function createOne(
  params: Prisma.BenefitPackageCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.create(params)
}

async function updateMany(
  params: Prisma.BenefitPackageUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.updateMany(params)
}

async function updateOne(
  params: Prisma.BenefitPackageUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.update(params)
}

async function deleteMany(
  params: Prisma.BenefitPackageDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.deleteMany(params)
}

async function deleteOne(
  params: Prisma.BenefitPackageDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.benefitPackage.delete(params)
}

const BenefitPackage = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default BenefitPackage
