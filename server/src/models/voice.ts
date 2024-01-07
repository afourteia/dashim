import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { Voice as VoiceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.VoiceFindManyArgs) {
  return await enhancedPrisma(userId).voice.findMany(params)
}

async function getOne(userId: string, params: Prisma.VoiceFindUniqueArgs) {
  return await enhancedPrisma(userId).voice.findUnique(params)
}

async function createMany(userId: string, params: Prisma.VoiceCreateManyArgs) {
  return await enhancedPrisma(userId).voice.createMany(params)
}

async function createOne(userId: string, params: Prisma.VoiceCreateArgs) {
  return await enhancedPrisma(userId).voice.create(params)
}

async function updateMany(userId: string, params: Prisma.VoiceUpdateManyArgs) {
  return await enhancedPrisma(userId).voice.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.VoiceUpdateArgs) {
  return await enhancedPrisma(userId).voice.update(params)
}

async function deleteMany(userId: string, params: Prisma.VoiceDeleteManyArgs) {
  return await enhancedPrisma(userId).voice.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.VoiceDeleteArgs) {
  return await enhancedPrisma(userId).voice.delete(params)
}

export const Voice = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
