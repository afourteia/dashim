import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
// import { Form, Link, useLoaderData } from '@remix-run/react'
import { ColorSchemeToggle } from '~/components/ColorSchemeToggle/ColorSchemeToggle'
import { NavBar } from '~/components/NavBar/NavBar'
import UIDirection from '~/components/UIDirection/UIDirection'
import User from '@server/models/user.server.ts'

import { prisma } from '@server/db.server.ts'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const users = await User.getMany()
  // const users = await getManyUsers({ orderBy: { id: 'desc' } })
  return json({ users })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className='flex justify-start content-start h-screen'>
      <NavBar />
      <div>
        <ColorSchemeToggle />
        <UIDirection />
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        {data.users &&
          data.users.map((user: any) => (
            <div key={user.id}>
              <h2>{user.firstName}</h2>
              <p>{user.email}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
      </div>
    </div>
  )
}
