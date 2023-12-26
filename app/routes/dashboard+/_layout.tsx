import {
  json,
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
// import { Form, Link, useLoaderData } from '@remix-run/react'
import { ColorSchemeToggle } from '@components/ColorSchemeToggle/ColorSchemeToggle'
import { NavBar } from '@components/NavBar/NavBar'
import UIDirection from '@components/UIDirection/UIDirection'
import { getSession } from '~/server/util/session.server'
import { User } from '~/server/models/user.server'
import { unGuardedPrisma } from '~/server/util/db.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Welcome to Dashim Dashboard!' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('loader dashboard layout')

  return null
}

export default function DashboardLayout() {
  // const data = useLoaderData()
  return (
    <div className='flex justify-start h-screen overflow-clip pt-1'>
      <div className='shrink'>
        <NavBar />
      </div>
      <div className='flex-grow overflow-x-auto'>
        <div className='flex flex-col justify-start self-center'>
          <div className='flex flex-wrap align-middle items-center justify-center self-center w-fit gap-7 px-2'>
            <ColorSchemeToggle />
            <UIDirection />
          </div>
          <div>dashboard layout</div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
