import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  const email = 'a@a.com'
  const email2 = 'b@b.com'

  // cleanup the existing database
  await prisma.user.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  })

  const hashedPassword = await bcrypt.hash('12345678', 10)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash: hashedPassword,
    },
  })

  await prisma.user.create({
    data: {
      email: email2,
      passwordHash: hashedPassword,
    },
  })

  await prisma.note.create({
    data: {
      title: 'My first note',
      body: 'Hello, world!',
      userId: user.id,
    },
  })

  await prisma.note.create({
    data: {
      title: 'My second note',
      body: 'Hello, world!',
      userId: user.id,
    },
  })

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
