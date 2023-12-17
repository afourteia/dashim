import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Voice = {
  getMany: middleware(async function getMany(
    params?: Prisma.VoiceFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.VoiceFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.VoiceCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.VoiceCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.VoiceUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.VoiceUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.VoiceDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.VoiceDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.voice.delete(params)
  }),
}

export default Voice
