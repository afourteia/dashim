import { useLocation } from '@remix-run/react'
import { redirect, type LoaderFunctionArgs } from '@remix-run/node'
import { getUserFromDb } from '~/server/util/auth.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('loader institution segment  first tab')
  const user = await getUserFromDb(request)

  if (!user) {
    console.log("user not found, redirect to '/dashboard/login'")
    return redirect('/dashboard/login')
  }

  return null
}

export default function InstitutionSegment() {
  const location = useLocation()
  return (
    <div>
      <h1>{location.pathname}</h1>
    </div>
  )
}
