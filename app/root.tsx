import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
// import '@mantine/core/styles.css'
// import './index.css'
import mantineStylesheet from '@mantine/core/styles.css'

import tailwindStylesheet from '~/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: mantineStylesheet },
  { rel: 'stylesheet', href: tailwindStylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
