# Server

This is the server side of our full stack monorepo application. It is built using the NestJS framework and uses several libraries including Prisma, Trpc, bcrypt, TypeScript, zod, cors, dotenv, s3, and http-status-codes.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Structure

The server is structured into modules, each with its own services and controllers. The main entry point is `src/main.ts`.

The `src/prisma/schema.prisma` file defines the database schema and the Prisma client.

## Environment Variables

The server uses environment variables for configuration. These are stored in the `.env` file. Be sure to update this file with your own values before running the server.

## Development Tools

For development, we use ESLint for linting and Faker for generating fake data for testing.

## Contributing

Please read the contribution guidelines before making a pull request.

## License

This project is licensed under the MIT License.
