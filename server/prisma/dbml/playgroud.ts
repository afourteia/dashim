// Getting an ordered list of tables and their dependencies from a DBML file

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

const tableRefs = await extractRefs('schema.dbml')

console.log('tableRefs')
console.log(tableRefs)

const tableDep: { [key: string]: string[] } = {}

for (const [table, relations] of Object.entries(tableRefs)) {
  tableDep[table] = Object.values(relations)
}
console.log('tableDep')
console.log(tableDep)

const visited: { [key: string]: boolean } = {}
const stack: string[] = []

interface Refs {
  [key: string]: string[]
}

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

Object.keys(tableDep).forEach((table: string) => {
  if (!visited[table]) {
    topologicalSort(table, visited, stack, tableDep)
  }
})

console.log('stack')
console.log(stack) // This will print the stack array to the console
