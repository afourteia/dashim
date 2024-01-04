import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { BenefitPackage as BenefitPackageType } from '@prisma/client'

async function getMany(
  userId: string,
  params?: Prisma.BenefitPackageFindManyArgs
) {
  return await enhancedPrisma(userId).benefitPackage.findMany(params)
}

async function getOne(
  userId: string,
  params: Prisma.BenefitPackageFindUniqueArgs
) {
  return await enhancedPrisma(userId).benefitPackage.findUnique(params)
}

async function createMany(
  userId: string,
  params: Prisma.BenefitPackageCreateManyArgs
) {
  return await enhancedPrisma(userId).benefitPackage.createMany(params)
}

async function createOne(
  userId: string,
  params: Prisma.BenefitPackageCreateArgs
) {
  return await enhancedPrisma(userId).benefitPackage.create(params)
}

async function updateMany(
  userId: string,
  params: Prisma.BenefitPackageUpdateManyArgs
) {
  return await enhancedPrisma(userId).benefitPackage.updateMany(params)
}

async function updateOne(
  userId: string,
  params: Prisma.BenefitPackageUpdateArgs
) {
  return await enhancedPrisma(userId).benefitPackage.update(params)
}

async function deleteMany(
  userId: string,
  params: Prisma.BenefitPackageDeleteManyArgs
) {
  return await enhancedPrisma(userId).benefitPackage.deleteMany(params)
}

async function deleteOne(
  userId: string,
  params: Prisma.BenefitPackageDeleteArgs
) {
  return await enhancedPrisma(userId).benefitPackage.delete(params)
}

export const BenefitPackage = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
