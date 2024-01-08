import fs from 'fs'
import readline from 'readline'

async function extractRefs(filePath: string) {
  const fileStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const refs: { [key: string]: any } = {}

  for await (const line of rl) {
    const match = line.match(/Ref: (\w+)\.(\w+) > (\w+)\.(\w+)/)
    if (match) {
      const sourceTable = match[1]
      const sourceField = match[2]
      const targetTable = match[3]

      if (!refs[sourceTable]) {
        refs[sourceTable] = {}
      }

      refs[sourceTable][sourceField] = targetTable
    }
  }

  return refs
}

extractRefs('schema.dbml').then((refs) => console.log(refs))
