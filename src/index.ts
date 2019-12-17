import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { resolvers } from './resolvers';
import { PetDataSource } from './PetDataSource';

const typeDefs = importSchema(__dirname + '/schema.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  dataSources: () => ({
    petDataSource: new PetDataSource()
  })
});

server
  .listen(2210)
  .then(({ port }: { port: string | number }) =>
    console.log(`Listening on port ${port}`)
  );
