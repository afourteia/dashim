export function HOF<T extends (...args: any) => any>(
  OG: T,
  defaultParamHOF: number = 30
) {
  return function ({
    paramHOF = defaultParamHOF,
    args,
  }: {
    paramHOF?: number
    args: Parameters<T>[0]
  }) {
    console.log(`HOF parameter: ${paramHOF}`)
    return OG(args)
  }
}

// Original function (OG)
function OG({ a, b }: { a: number; b: number }) {
  return a + b
}

// Create a new function with HOF
const newFunction = HOF(OG)

// Call the new function
console.log(newFunction({ args: { a: 5, b: 15 } })) // Outputs: 30
console.log(newFunction({ paramHOF: 25, args: { a: 5, b: 15 } })) // Outputs: 40
