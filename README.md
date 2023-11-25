# My Full Stack Monorepo

This is a full stack monorepo project with a client side and a server side.

## Client

The client side of the project is built with Vue.js. It uses TypeScript for static type checking, Quasar for UI components, Vite for building and serving the application, and tRPC for type-safe API calls.

For more details, see the [client README](./client/README.md).

## Server

The server side of the project is built with NestJS. It uses TypeScript for static type checking, Prisma for database access, tRPC for type-safe API calls, bcrypt for password hashing, Zod for schema validation, cors for handling CORS, dotenv for environment variable management, AWS S3 for file storage, and http-status-codes for HTTP status codes.

For more details, see the [server README](./server/README.md).

## Development

For development, we use ESLint for linting and Faker for generating fake data.

## Getting Started

To get started with development:

1. Clone the repository.
2. Install the dependencies in both the client and server directories with `npm install`.
3. Start the client and server with `npm start` in their respective directories.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

License TBA
