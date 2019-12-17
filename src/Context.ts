import { PetDataSource } from './PetDataSource';

export interface Context {
  dataSources: {
    petDataSource: PetDataSource;
  };
}
