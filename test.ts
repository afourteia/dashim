export function HOF2<T extends (...args: any) => any>(
  OG: T,
  defaultParamHOF: { c?: string; d?: number } = { c: 'default2', d: -5 }
) {
  return async function (
    args: Parameters<T>[0] = {},
    paramHOF: { c?: string; d?: number } = {}
  ) {
    console.log('entering HOF2')
    paramHOF = { ...defaultParamHOF, ...paramHOF }
    console.log(
      `HOF2 parameter: ${paramHOF.c ?? 'c is not defined'}, ${
        paramHOF.d ?? 'd is not defined'
      }`
    )
    args.a += paramHOF.d
    return await OG(args)
  }
}

export function HOF<T extends (...args: any) => any>(
  OG: T,
  defaultParamHOF: { c?: string; d?: number } = { c: 'default', d: 0 }
) {
  return async function (
    args: Parameters<T>[0],
    paramHOF: { c?: string; d?: number } = {}
  ) {
    console.log('entering HOF')
    console.log('OG name', OG.name)
    paramHOF = { ...defaultParamHOF, ...paramHOF }
    console.log(
      `HOF parameter: ${paramHOF.c ?? 'c is not defined'}, ${
        paramHOF.d ?? 'd is not defined'
      }`
    )
    // args.a += paramHOF.d
    return await HOF2(OG)(args, paramHOF)
  }
}

// Original function (OG)
async function add({ a, b }: { a: number; b: number }) {
  return await (a + b)
}

async function add2({ a, b }: { a: number; b: number }) {
  return await (a + b)
}

// Create a new function with HOF
const ADD = {
  newFunction: HOF(add),
  newFunction1: HOF(add2, { c: 'custom1', d: 40 }),
}

const newFunction2 = HOF(add)

// Call the new function
async function run() {
  console.log('Outputs NF: ', await ADD.newFunction({ a: 5, b: 15 }))
  console.log(
    'Outputs NF: ',
    await ADD.newFunction({ a: 5, b: 15 }, { c: 'custom', d: 20 })
  )
  console.log(
    'Outputs NF: ',
    await ADD.newFunction({ a: 5, b: 15 }, { c: `stringhere` })
  )
  console.log('Outputs NF: ', await ADD.newFunction({ a: 5, b: 15 }, { d: 10 }))

  console.log('Outputs NF1: ', await ADD.newFunction1({ a: 5, b: 15 }))
  console.log(
    'Outputs NF1: ',
    await ADD.newFunction1({ a: 5, b: 15 }, { c: 'custom', d: 20 })
  )
  console.log(
    'Outputs NF1: ',
    await ADD.newFunction1({ a: 5, b: 15 }, { c: `stringhere` })
  )
  console.log(
    'Outputs NF1: ',
    await ADD.newFunction1({ a: 5, b: 15 }, { d: 10 })
  )
  console.log('Outputs NF2: ', await newFunction2({ a: 5, b: 15 }, { d: 10 }))
  console.log(
    'Outputs NF2: ',
    await newFunction2({ a: 5, b: 15 }, { c: 'custom', d: 20 })
  )
}

run()
