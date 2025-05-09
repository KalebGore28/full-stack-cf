// worker/graphql/schema.ts
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import schemaSDL from "./schema.graphql?raw";

export const schema = makeExecutableSchema({
  typeDefs: schemaSDL,
  resolvers,
});

