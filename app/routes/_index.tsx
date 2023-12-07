import type { MetaFunction } from '@remix-run/node'
import { Form, Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
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
    </div>
  )
}