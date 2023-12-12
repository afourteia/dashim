import { type LoaderFunctionArgs } from '@remix-run/node'
import { txt } from 'remix-utils/responses'

export async function loader({ request }: LoaderFunctionArgs) {
  return txt(`
    User-agent: *
    Allow: /
  `)
}
