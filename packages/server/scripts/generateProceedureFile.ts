import stripJsonComments from 'strip-json-comments'
import * as ts from 'typescript'
import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const scriptTarget = ts.ScriptTarget.ES2015

const controllerDir = path.join(__dirname, 'src', 'controller')
console.log('controllerDir is: ', controllerDir)

const files = fs
  .readdirSync(controllerDir)
  .filter((file) => file.endsWith('.ts'))

let importStatements =
  "import { middleware } from '@server/util/middleware.server';\n"

let procedure = ''

for (const file of files) {
  const sourceFile = ts.createSourceFile(
    file,
    fs.readFileSync(path.join(controllerDir, file)).toString(),
    scriptTarget,
    true
  )

  const exportedFunctions = sourceFile.statements
    .filter(ts.isFunctionDeclaration)
    .filter(
      (declaration) =>
        declaration.modifiers?.some(
          (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
        )
    )
    .filter((declaration) => declaration.name?.getText().startsWith('_'))

  if (exportedFunctions.length > 0) {
    const importPath = `@server/controller/${file.replace('.ts', '')}`
    const importFunctions = exportedFunctions
      .map((func) => func.name?.getText())
      .join(', ')
    importStatements += `import { ${importFunctions} } from '${importPath}';\n`
  }

  for (const func of exportedFunctions) {
    const funcName = func.name?.getText().substring(1)
    if (funcName == 'verifyLogin') {
      procedure += `  ${funcName}: ${func.name?.getText()},\n`
    } else {
      procedure += `  ${funcName}: middleware(${func.name?.getText()}),\n`
    }
  }
}

procedure =
  importStatements + '\nexport const procedure = {\n' + procedure + '}\n'

// console.log(procedure)
fs.writeFileSync(path.join(controllerDir, '_procedure.server.ts'), procedure)
console.log('Output is: ', path.join(controllerDir, '_procedure.server.ts'))
