# Client

This is the client side of our full stack monorepo application. It is built using Vue.js, a progressive JavaScript framework for building user interfaces.

## Libraries Used

- Vue.js: The main framework used for building the user interface.
- TypeScript: A superset of JavaScript that adds static types.
- Quasar: A high-performance Material Design component suite with builders for SPA, SSR, PWA, Mobile (Cordova & Capacitor), Desktop (Electron) and Browser extensions.
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- tRPC: A framework for building typesafe APIs, fully end-to-end typesafe APIs with the power of TypeScript.

## Project setup

First, make sure to install all the dependencies by running:

```
npm install
```

### Compiles and hot-reloads for development

To start the development server, run:

```
npm run dev
```

### Compiles and minifies for production

To build the application for production, run:

```
npm run build
```

### Lints and fixes files

To lint and fix files, run:

```
npm run lint
```

## Project Structure

- `src/components`: This directory contains all the Vue components used in the application.
- `src/views`: This directory contains all the Vue views or pages used in the application.
- `src/App.vue`: This is the main Vue component that is first rendered in the application.
- `src/main.ts`: This is the entry point of the Vue application. It creates a Vue instance and mounts it to the DOM.

## Environment Variables

To add environment variables, create a `.env` file in the root of the client directory. You can use the `.env.example` file as a reference.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.