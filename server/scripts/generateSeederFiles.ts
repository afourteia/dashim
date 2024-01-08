import { Prisma, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { LocaleKeys } from '../../browser/src/lang/i18n-config'

interface Refs {
  [key: string]: string[]
}

const refs: Refs = {
  User: ['Gender'],
  TenantMembers: ['Tenant', 'User'],
  Tenant: ['TenantType', 'User'],
  DeviceToken: ['DeviceType', 'User'],
  Institution: ['Tenant'],
  Subscriber: ['Institution', 'InsurancePolicy'],
  SubscriberGroup: ['Gender', 'Subscriber', 'Relationship'],
  Fingerprint: ['FingerType', 'SubscriberGroup'],
  IDCard: ['SubscriberGroup'],
  Face: ['SubscriberGroup'],
  Voice: ['SubscriberGroup'],
  InsurancePolicy: ['Institution'],
  BenefitPackage: ['InsurancePolicy'],
  MedicalCenter: ['Tenant'],
  MedicalCenterService: ['MedicalCenter', 'MedicalCenterServiceTemplate'],
}

const visited: { [key: string]: boolean } = {}
const stack: string[] = []

function topologicalSort(
  table: string,
  visited: { [key: string]: boolean },
  stack: string[],
  refs: Refs
) {
  visited[table] = true
  const edges: string[] = refs[table] || []

  edges.forEach((node: string) => {
    if (!visited[node]) {
      topologicalSort(node, visited, stack, refs)
    }
  })

  stack.push(table) // Use push instead of unshift
}

Object.keys(refs).forEach((table: string) => {
  if (!visited[table]) {
    topologicalSort(table, visited, stack, refs)
  }
})

console.log(stack) // This will print the stack array to the console
// const prisma = new PrismaClient()

// async function createUser() {
//   const userData: Prisma.UserCreateInput = {
//     firstName: faker.person.firstName(),
//     email: faker.internet.email(),
//     // Map other fields in the User model to appropriate faker.js functions...
//   }

//   const user = await prisma.user.create({ data: userData })
//   return user
