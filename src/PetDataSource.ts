import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pet, PetStatus, PetInput } from './schema-types';
import { Response } from 'apollo-server-env';

export class PetDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://petstore.swagger.io/v2/pet/';
  }

  async parseBody(response: Response) {
    let parsedResponse = await super.parseBody(response);
    if (parsedResponse instanceof Array) {
      parsedResponse = parsedResponse.map(item => normalize(item));
    } else parsedResponse = normalize(parsedResponse);
    return parsedResponse;
  }

  willSendRequest(request: RequestOptions) {
    if (request.method === 'POST' || request.method === 'PUT')
      request.headers.set('Content-Type', 'application/json');
  }

  findById(id: string) {
    return this.get<Pet>(id);
  }

  findManyByStatus(statuses: PetStatus[]) {
    return this.get<Pet[]>(
      'findByStatus',
      JSON.stringify({ status: statuses })
    );
  }

  createOne(input: PetInput) {
    return this.post<Pet>('', JSON.stringify(input));
  }

  updateOne(id: string, input: PetInput) {
    return this.put<Pet>(
      '',
      JSON.stringify({ ...input, id: parseInt(id, 10) })
    );
  }

  async deleteOne(id: string) {
    this.delete(id);
    return;
  }
}

const normalize = (item: any) => {
  if (typeof item === 'object' && typeof item.id === 'number')
    item.id = item.id.toString();
  return item;
};
