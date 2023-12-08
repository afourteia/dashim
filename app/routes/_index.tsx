import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import { Form, Link, useLoaderData } from '@remix-run/react'
import User from '~/server/models/user.server.ts'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const users = await User.getMany()
  const notes = await User.getNotesMany()
  console.log(
    users?.length > 0 ? 'Users are: ' + JSON.stringify(users) : 'no users'
  )
  console.log(
    notes?.length > 0 ? 'Notes are: ' + JSON.stringify(users) : 'no notes'
  )
  return json({ users })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className='flex h-full min-h-screen flex-col'>
      <header className='flex items-center justify-between bg-slate-800 p-4 text-white'>
        <h1 className='text-3xl font-bold'>
          <Link to='.'>Home Page</Link>
        </h1>
        <Form action='/logout' method='post'>
          <button
            type='submit'
            className='rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600'
          >
            Logout
          </button>
        </Form>
      </header>
      <main className='flex-1 flex flex-col justify-center items-center'>
        {data.users.length === 0 ? (
          <p className='p-4'>No users yet</p>
        ) : (
          <ol>
            {data.users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ol>
        )}
      </main>
    </div>
  )
}
