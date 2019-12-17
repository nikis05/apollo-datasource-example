import { Resolvers } from './schema-types';

export const resolvers: Resolvers = {
  Query: {
    pet: (_, { id }, { dataSources: { petDataSource } }) =>
      petDataSource.findById(id),
    petsByStatus: (_, { statuses }, { dataSources: { petDataSource } }) =>
      petDataSource.findManyByStatus(statuses)
  },
  Mutation: {
    createPet: (_, { input }, { dataSources: { petDataSource } }) =>
      petDataSource.createOne(input),
    updatePet: (_, { id, input }, { dataSources: { petDataSource } }) =>
      petDataSource.updateOne(id, input),
    deletePet: async (_, { id }, { dataSources: { petDataSource } }) => {
      petDataSource.deleteOne(id);
      return id;
    }
  }
};
