import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Voice as VoiceType } from '@prisma/client'

async function getMany(params?: Prisma.VoiceFindManyArgs) {
  return await prisma.voice.findMany(params)
}

async function getOne(params: Prisma.VoiceFindUniqueArgs) {
  return await prisma.voice.findUnique(params)
}

async function createMany(params: Prisma.VoiceCreateManyArgs) {
  return await prisma.voice.createMany(params)
}

async function createOne(params: Prisma.VoiceCreateArgs) {
  return await prisma.voice.create(params)
}

async function updateMany(params: Prisma.VoiceUpdateManyArgs) {
  return await prisma.voice.updateMany(params)
}

async function updateOne(params: Prisma.VoiceUpdateArgs) {
  return await prisma.voice.update(params)
}

async function deleteMany(params: Prisma.VoiceDeleteManyArgs) {
  return await prisma.voice.deleteMany(params)
}

async function deleteOne(params: Prisma.VoiceDeleteArgs) {
  return await prisma.voice.delete(params)
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
