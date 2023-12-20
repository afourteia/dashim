import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { InsurancePolicy as InsurancePolicyType } from '@prisma/client'

async function getMany(params?: Prisma.InsurancePolicyFindManyArgs) {
  return await prisma.insurancePolicy.findMany(params)
}

async function getOne(params: Prisma.InsurancePolicyFindUniqueArgs) {
  return await prisma.insurancePolicy.findUnique(params)
}

async function createMany(params: Prisma.InsurancePolicyCreateManyArgs) {
  return await prisma.insurancePolicy.createMany(params)
}

async function createOne(params: Prisma.InsurancePolicyCreateArgs) {
  return await prisma.insurancePolicy.create(params)
}

async function updateMany(params: Prisma.InsurancePolicyUpdateManyArgs) {
  return await prisma.insurancePolicy.updateMany(params)
}

async function updateOne(params: Prisma.InsurancePolicyUpdateArgs) {
  return await prisma.insurancePolicy.update(params)
}

async function deleteMany(params: Prisma.InsurancePolicyDeleteManyArgs) {
  return await prisma.insurancePolicy.deleteMany(params)
}

async function deleteOne(params: Prisma.InsurancePolicyDeleteArgs) {
  return await prisma.insurancePolicy.delete(params)
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
