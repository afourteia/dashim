import { Prisma } from '@prisma/client'
// import fs from 'fs/promises'
const fs = require('fs')
const path = require('path')

const TableNames = Object.values(Prisma.ModelName)
console.log(TableNames)

// The path to your template file
const templatePath = path.join(__dirname, 'CRUDtemplate.ts')
console.log(templatePath)

// Read the template file
const template = fs.readFileSync(templatePath, 'utf-8')

// The path to the output directory
const outputDirectory = path.resolve(__dirname, '..', 'app', 'server', 'models')
console.log(outputDirectory)

// For each word in the list, replace "User" and "user" in the template and write to a new file
// if (!fs.existsSync(outputDirectory)) {
//   fs.mkdirSync(outputDirectory, { recursive: true })
// }
TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1)
  const output = template
    .replace(/User/g, TableName)
    .replace(/user/g, tableName)

  fs.writeFileSync(
    path.join(outputDirectory, '\\', `${tableName}.server.ts`),
    output
  )
})
