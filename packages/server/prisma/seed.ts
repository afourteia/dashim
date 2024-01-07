import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { User } from '@models/user.server'
import { create } from 'domain'
import { createId } from '@paralleldrive/cuid2'

const prisma = new PrismaClient()

async function seed() {
  const email = 'a@a.com'

  // cleanup the existing database
  await prisma.user.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  })

  const hashedPassword = await bcrypt.hash('12345678', 10)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await User.createOne({
    data: {
      email,
      passwordHash: hashedPassword,
      username: 'aaaa',
      birthDate: new Date(),
      avatar: 'sdfasdfasd',
      firstName: 'aaaa',
      lastName: 'aaaa',
      id: createId(),
      searchName: 'aaaa',
      DeviceToken: {
        create: {
          name: 'fds',
          id: createId(),
          deviceType: {
            create: {
              name: 'ios',
              id: createId(),
            },
          },
        },
      },
    },
  })

  // await User.createOne({
  //   data: {
  //     email: email2,
  //     passwordHash: hashedPassword,
  //   },
  // })

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
