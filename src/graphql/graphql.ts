import { ApolloServer } from "@apollo/server";
import { graphQLSchema } from "./schema/Schema.js";
import { GraphQLResolver } from "./resolvers/resolvers.js";

export const connectGraphQL = () => {
  const server = new ApolloServer({
    typeDefs: graphQLSchema,
    resolvers: GraphQLResolver,
  });
  return server;
};
