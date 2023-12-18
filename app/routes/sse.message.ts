import type { LoaderFunctionArgs } from '@remix-run/node'
import { eventStream } from 'remix-utils/sse/server'
// import { EventEmitter } from 'events'
import { globalEmitter } from '~/server/util/emitter.server'

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('new connection message')

  let controller = new AbortController()
  request.signal.addEventListener('abort', () => controller.abort())

  function init(send: any, close: any) {
    let paragraph =
      'This is a much longer paragraph that will be sent one character at a time. It could be any text you want.'
    let index = 1

    globalEmitter.on('customEvent', (data) => {
      console.log('received customEvent from globalEmitter', data)
      paragraph = data
      index = 1
      let intervalId = setInterval(() => {
        if (index >= paragraph.length) {
          send({ event: 'message1', data: 'End' })
          clearInterval(intervalId)
          // close()
          // return controller.abort()
        } else {
          send({ event: 'message1', data: 'Sending' })
          send({ event: 'message', data: paragraph.substring(0, index) })
          index++
        }
      }, 50)
    })

    let intervalId = setInterval(() => {
      if (index >= paragraph.length) {
        send({ event: 'message1', data: 'End' })
        clearInterval(intervalId)
        // close()
        // return controller.abort()
      } else {
        send({ event: 'message1', data: 'Sending' })
        send({ event: 'message', data: paragraph.substring(0, index) })
        index++
      }
    }, 50)

    return function cleanup() {
      clearInterval(intervalId)
    }
  }

  return eventStream(request.signal, init)
}
