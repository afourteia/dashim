// Original function (OG)
function addS(a: number, b: number): string {
  return (a + b).toString()
}

function addN(a: number, b: number): number {
  return a + b
}

// Higher-Order Function (HOF)
function HOF1(
  OG: (a: number, b: number) => T,
  defaultNumber: number = 10
): (a: number, b: number) => T {
  return (a: number, b: number): T | number => {
    return OG(a, b) + defaultNumber
  }
}

function HOF2(
  OG: (a: number, b: number) => number,
  defaultNumber: number = 15
): (a: number, b: number, defaultNumber?: number) => number {
  return (a: number, b: number, defaultNumberOverride?: number): number => {
    const finalDefaultNumber = defaultNumberOverride ?? defaultNumber
    return OG(a, b) + finalDefaultNumber
  }
}

function example<T>(arg: T): T {
  return arg
}

const x = 22 as number

const ssss = example(x)

console.log(ssss)

// Call a function that passes OG into HOF and arguments for the OG function
const newFunction11 = HOF1(addN)
console.log(newFunction11(1, -1)) // Outputs: 13 (1 + 2 + 10)

// Call another function that passes OG into HOF as well as arguments for OG function and second argument for HOF function
const newFunction12 = HOF1(addS, 20)
console.log(newFunction12(1, -1)) // Outputs: 23 (1 + 2 + 20)

// Call a function that passes OG into HOF and arguments for the OG function
const newFunction21 = HOF2(add, 4)
console.log(newFunction21(1, -1)) // Outputs: 13 (1 + 2 + 4)

// Call another function that passes OG into HOF as well as arguments for OG function and second argument for HOF function
const newFunction22 = HOF2(add)
console.log(newFunction22(1, -1, 12)) // Outputs: 15 (1 + 2 + 12)

// Call another function that passes OG into HOF as well as arguments for OG function and second argument for HOF function
const newFunction23 = HOF2(add)
console.log(newFunction23(1, -1)) // Outputs: 15 (1 + 2 + 12)

// export function HOF2<T extends (...args: any) => any>(
//   OG: T,
//   defaultParamHOF: { c?: string; d?: number } = { c: 'default2', d: -5 }
// ) {
//   console.log('creating HOF2%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
//   return async function (
//     args: Parameters<T>[0] = {},
//     paramHOF: { c?: string; d?: number } = {}
//   ) {
//     console.log('entering HOF2')
//     paramHOF = { ...defaultParamHOF, ...paramHOF }
//     console.log(
//       `HOF2 parameter: ${paramHOF.c ?? 'c is not defined'}, ${
//         paramHOF.d ?? 'd is not defined'
//       }`
//     )
//     args.a += paramHOF.d
//     return await OG(args)
//   }
// }

// export function HOF<T extends (...args: any) => any>(
//   OG: T,
//   defaultParamHOF: { c?: string; d?: number } = { c: 'default', d: 0 },
//   defaultParamHOF1: { c?: string; d?: number } = { c: 'default', d: 0 }
// ): (...funcArgs: Parameters<T>) => Promise<ReturnType<T>> {
//   console.log('creating HOF#################################')
//   const test = HOF2(OG)
//   return async function (
//     args: Parameters<T>[0],
//     paramHOF: { c?: string; d?: number } = {},
//     test1: { c?: string; d?: number } = {}
//   ): Promise<ReturnType<T>> {
//     console.log('entering HOF')
//     console.log('OG name', OG.name)
//     paramHOF = { ...defaultParamHOF, ...paramHOF }
//     console.log(
//       `HOF parameter: ${paramHOF.c ?? 'c is not defined'}, ${
//         paramHOF.d ?? 'd is not defined'
//       }`
//     )
//     // args.a += paramHOF.d
//     return await OG(args)
//     // return await test(args, paramHOF)
//     // return await HOF2(OG)(args, paramHOF)
//   }
// }

// // Original function (OG)
// async function add({ a, b }: { a: number; b: number }) {
//   return await (a + b)
// }

// async function add2({ a, b }: { a: number; b: number }) {
//   return await (a + b)
// }

// // Create a new function with HOF
// console.log('creating ADD----------')
// const ADD = {
//   newFunction: HOF(add),
//   newFunction1: HOF(add2, { c: 'custom1', d: 40 }),
// }
// console.log('Done creating ADD----------')

// console.log('creating newFunction2----------')

// const newFunction2 = HOF(add)

// console.log('Done creating newFunction2----------')

// // Call the new function
// async function run() {
//   console.log('Outputs NF: ', await ADD.newFunction({ a: 5, b: 15 }))
//   console.log(
//     'Outputs NF: ',
//     await ADD.newFunction({ a: 5, b: 15 }, { c: 'custom', d: 20 })
//   )
//   console.log(
//     'Outputs NF: ',
//     await ADD.newFunction({ a: 5, b: 15 }, { c: `stringhere` })
//   )
//   console.log('Outputs NF: ', await ADD.newFunction({ a: 5, b: 15 }, { d: 10 }))

//   console.log('Outputs NF1: ', await ADD.newFunction1({ a: 5, b: 15 }))
//   console.log(
//     'Outputs NF1: ',
//     await ADD.newFunction1({ a: 5, b: 15 }, { c: 'custom', d: 20 })
//   )
//   console.log(
//     'Outputs NF1: ',
//     await ADD.newFunction1({ a: 5, b: 15 }, { c: `stringhere` })
//   )
//   console.log(
//     'Outputs NF1: ',
//     await ADD.newFunction1({ a: 5, b: 15 }, { d: 10 })
//   )
//   console.log('Outputs NF2: ', await newFunction2({ a: 5, b: 15 }, { d: 10 }))
//   console.log(
//     'Outputs NF2: ',
//     await newFunction2({ a: 5, b: 15 }, { c: 'custom', d: 20 })
//   )

//   console.log('special output: ', await HOF(add)({ a: 5, b: 15 }))
// }

// run()
