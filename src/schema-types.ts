import { GraphQLResolveInfo } from 'graphql';
import { Context } from './Context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Category = {
   __typename?: 'Category',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createPet: Pet,
  updatePet: Pet,
  deletePet: Scalars['ID'],
};


export type MutationCreatePetArgs = {
  input: PetInput
};


export type MutationUpdatePetArgs = {
  id: Scalars['ID'],
  input: PetInput
};


export type MutationDeletePetArgs = {
  id: Scalars['ID']
};

export type Pet = {
   __typename?: 'Pet',
  id: Scalars['ID'],
  category: Category,
  name: Scalars['String'],
  photoUrls: Array<Scalars['String']>,
  tags: Array<Tag>,
  status: PetStatus,
};

export type PetInput = {
   __typename?: 'PetInput',
  id?: Maybe<Scalars['ID']>,
  category?: Maybe<Category>,
  name?: Maybe<Scalars['String']>,
  photoUrls?: Maybe<Array<Scalars['String']>>,
  tags?: Maybe<Array<Maybe<Tag>>>,
  status?: Maybe<PetStatus>,
};

export enum PetStatus {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}

export type Query = {
   __typename?: 'Query',
  pet: Pet,
  petsByStatus: Array<Pet>,
};


export type QueryPetArgs = {
  id: Scalars['ID']
};


export type QueryPetsByStatusArgs = {
  statuses: Array<PetStatus>
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Pet: ResolverTypeWrapper<Pet>,
  Category: ResolverTypeWrapper<Category>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Tag: ResolverTypeWrapper<Tag>,
  PetStatus: PetStatus,
  Mutation: ResolverTypeWrapper<{}>,
  PetInput: ResolverTypeWrapper<PetInput>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  Pet: Pet,
  Category: Category,
  String: Scalars['String'],
  Tag: Tag,
  PetStatus: PetStatus,
  Mutation: {},
  PetInput: PetInput,
  Boolean: Scalars['Boolean'],
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPet?: Resolver<ResolversTypes['Pet'], ParentType, ContextType, RequireFields<MutationCreatePetArgs, 'input'>>,
  updatePet?: Resolver<ResolversTypes['Pet'], ParentType, ContextType, RequireFields<MutationUpdatePetArgs, 'id' | 'input'>>,
  deletePet?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeletePetArgs, 'id'>>,
};

export type PetResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  photoUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>,
  status?: Resolver<ResolversTypes['PetStatus'], ParentType, ContextType>,
};

export type PetInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PetInput'] = ResolversParentTypes['PetInput']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  photoUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['PetStatus']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pet?: Resolver<ResolversTypes['Pet'], ParentType, ContextType, RequireFields<QueryPetArgs, 'id'>>,
  petsByStatus?: Resolver<Array<ResolversTypes['Pet']>, ParentType, ContextType, RequireFields<QueryPetsByStatusArgs, 'statuses'>>,
};

export type TagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Category?: CategoryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Pet?: PetResolvers<ContextType>,
  PetInput?: PetInputResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Tag?: TagResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
