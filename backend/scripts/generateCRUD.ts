import { Prisma } from '@prisma/client'
// import fs from 'fs/promises'
const fs = require('fs')
const path = require('path')

const TableNames = Object.values(Prisma.ModelName)
// console.log(TableNames)

// The path to your template file
const templatePath = path.join(__dirname, 'CRUDtemplate.ts')
// console.log(templatePath)

// Read the template file
const template = fs.readFileSync(templatePath, 'utf-8')

// The path to the output directory
const outputDirectory: string = path.resolve(__dirname, '..', 'src', 'models')

// For each word in the list, replace "User" and "user" in the template and write to a new file
// if (!fs.existsSync(outputDirectory)) {
//   fs.mkdirSync(outputDirectory, { recursive: true })
// }
TableNames.forEach((TableName) => {
  const tableName = TableName.charAt(0).toLowerCase() + TableName.slice(1)
  const output: string = template
    .replace(/User/g, TableName)
    .replace(/user(?!Id)/g, tableName)

  fs.writeFileSync(
    path.join(outputDirectory, '\\', `${tableName}.server.ts`),
    output
  )
})

console.log('output is: ', outputDirectory)
