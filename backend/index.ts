import express from 'express'
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from '@router/_router'

const app = express()
const PORT = 3000

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions): {
  req: typeof req
  res: typeof res
  test: string
  context: string
} => ({
  req,
  res,
  test: 'some test value', // replace with actual value
  context: 'some context value', // replace with actual value
})
type Context = Awaited<ReturnType<typeof createContext>>

// enable cors
app.use(cors())

// File size limit
app.use(express.json({ limit: '150mb' }))
app.use(express.urlencoded({ extended: true, limit: '150mb' }))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.get('/', (req, res) => {
  res.send('Hello World from Express')
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})
