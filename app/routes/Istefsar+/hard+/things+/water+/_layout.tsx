import { Outlet } from '@remix-run/react'

export default function Index() {
  // const data = useLoaderData()
  return (
    <div>
      <div>water layout</div>
      <Outlet />
    </div>
  )
}
