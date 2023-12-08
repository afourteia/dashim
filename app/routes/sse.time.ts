import type { LoaderFunctionArgs } from '@remix-run/node'
import { eventStream } from 'remix-utils/sse/server'
// import { interval } from 'remix-utils/timers'

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('new connection time')
  function init(send: any, close: any) {
    // Declare intervalId inside the init function
    let intervalId = setInterval(() => {
      send({ event: 'time', data: new Date().toISOString() })
    }, 1000)

    // Return a cleanup function from the init function
    return function cleanup() {
      // Clear the interval using intervalId
      clearInterval(intervalId)
    }
  }

  return eventStream(request.signal, init)
}
