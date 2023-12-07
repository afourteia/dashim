import { flatRoutes } from 'remix-flat-routes'

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: './node_modules/.cache/remix', // from indie stack
  ignoredRouteFiles: ['**/.*', '**/*.test.{ts,tsx}'],
  routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes)
  },
  tailwind: true,
  postcss: false,
  // serverModuleFormat: 'cjs', // from indie stack
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
}
