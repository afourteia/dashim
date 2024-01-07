import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { InsurancePolicy as InsurancePolicyType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.InsurancePolicyFindManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.findMany(params)
}

async function getOne(userId: string, params: Prisma.InsurancePolicyFindUniqueArgs) {
  return await enhancedPrisma(userId).insurancePolicy.findUnique(params)
}

async function createMany(userId: string, params: Prisma.InsurancePolicyCreateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.createMany(params)
}

async function createOne(userId: string, params: Prisma.InsurancePolicyCreateArgs) {
  return await enhancedPrisma(userId).insurancePolicy.create(params)
}

async function updateMany(userId: string, params: Prisma.InsurancePolicyUpdateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.InsurancePolicyUpdateArgs) {
  return await enhancedPrisma(userId).insurancePolicy.update(params)
}

async function deleteMany(userId: string, params: Prisma.InsurancePolicyDeleteManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.InsurancePolicyDeleteArgs) {
  return await enhancedPrisma(userId).insurancePolicy.delete(params)
}

export const InsurancePolicy = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
