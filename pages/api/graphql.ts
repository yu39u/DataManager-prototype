import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "../apollo";
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import resolvers from '../../apollo/resolvers';


const schema = loadSchemaSync('apollo/shcema.graphql', {
	loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer({
	schema: schemaWithResolvers
});

export default startServerAndCreateNextHandler(server, {
	context: async (req, res) => ({ req, res, user: { login: true } }),
});