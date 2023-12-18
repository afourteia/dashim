import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.VoiceFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.findMany(params)
}

async function getOne(
  params: Prisma.VoiceFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.findUnique(params)
}

async function createMany(
  params: Prisma.VoiceCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.createMany(params)
}

async function createOne(
  params: Prisma.VoiceCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.create(params)
}

async function updateMany(
  params: Prisma.VoiceUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.updateMany(params)
}

async function updateOne(
  params: Prisma.VoiceUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.update(params)
}

async function deleteMany(
  params: Prisma.VoiceDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.deleteMany(params)
}

async function deleteOne(
  params: Prisma.VoiceDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.voice.delete(params)
}

const Voice = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Voice
