import type { MetaFunction } from '@remix-run/node'
import { Button } from '@components/ui/button'
import AccordionDemo from '@components/demo'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className='bg-gray-200 font-bold text-lg'>Welcome to Remix</h1>
      <Button className='px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform'>
        Click me
      </Button>
      <div className='w-5/12'>
        <AccordionDemo />
      </div>
      <ul>
        <li className='bg-slate-300 text-slate-900'>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li className='bg-black text-white'>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
