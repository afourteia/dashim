import {
  json,
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
// import { Form, Link, useLoaderData } from '@remix-run/react'
import { ColorSchemeToggle } from '@components/ColorSchemeToggle/ColorSchemeToggle'
import { NavBar } from '@components/NavBar/NavBar'
import UIDirection from '@components/UIDirection/UIDirection'
import { getSession } from '~/server/util/session.server'
import { User } from '~/server/models/user.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))

  console.log('session id', session.id)
  console.log('session data', session.data)

  if (!session.has('userId')) {
    // Redirect to the home page if they are already signed in.
    console.log('session does not have userId')
    return redirect('/login')
  }

  const user = User.getMany(request)

  return null
}

export default function Index() {
  // const data = useLoaderData()
  return (
    <div className='flex justify-start content-end h-screen'>
      <NavBar />
      <div className='w-full justify-start '>
        <ColorSchemeToggle />
        <UIDirection />
      </div>
    </div>
  )
}
