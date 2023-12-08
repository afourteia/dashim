import { txt } from 'remix-utils/responses'

export async function loader({ request }: LoaderArgs) {
  return txt(`
    User-agent: *
    Allow: /
  `)
}
