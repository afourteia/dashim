import { z } from 'zod'
import { prisma, unGuardedPrisma } from '../util/db.server'
import { type Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'

const createUserDataSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  secondName: z.string().nullish(),
  thirdName: z.string().nullish(),
  fourthName: z.string().nullish(),
  lastName: z.string(),
  searchName: z.string().nullish(),
  birthDate: z.date().refine((date) => date <= new Date(), {
    message: 'Birth date cannot be in the future',
  }),
  genderId: z.string().nullish(),
  nationality: z.string().nullish(),
  nationalID: z.string().nullish(),
  residence: z.string().nullish(),
  address: z.string().nullish(),
  username: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(8),
  avatar: z.string().nullish(),
})

type createUserData = z.infer<typeof createUserDataSchema>

export async function _createUser(data: createUserData) {
  const validatedData = createUserDataSchema.parse(data)

  const hashedPassword = await bcrypt.hash(validatedData.password, 10)
  const searchName: string =
    validatedData.firstName +
    validatedData.secondName +
    validatedData.thirdName +
    validatedData.lastName
  const { password, ...userWithoutPassword } = validatedData
  const ProcessedData: Prisma.UserCreateInput = {
    ...userWithoutPassword,
    passwordHash: hashedPassword,
    searchName,
  }
  return await prisma.user.create({ data: ProcessedData })
}

const verifyLoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
type verifyLoginData = z.infer<typeof verifyLoginDataSchema>

export async function _verifyLogin(data: verifyLoginData) {
  const validatedData = verifyLoginDataSchema.parse(data)
  const user = await unGuardedPrisma.user.findUnique({
    where: {
      email: validatedData.email,
    },
    select: {
      id: true,
      username: true,
      email: true,
      passwordHash: true,
    },
  })

  if (!user) return null

  const isValid = await bcrypt.compare(
    validatedData.password,
    user.passwordHash
  )
  if (!isValid) return null

  // Remove passwordHash from user object
  const { passwordHash, ...userWithoutPassword } = user

  return userWithoutPassword
}
