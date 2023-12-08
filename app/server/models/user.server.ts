import { prisma } from '@server/db.server.ts'

export async function getAllUsers() {
  return await prisma.user.findMany()
}
