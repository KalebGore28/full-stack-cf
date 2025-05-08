// src/server/graphql/schema.ts
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

const resolvers = {
    Query: {
        hello: () => "Hello from GraphQL!",
    },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
