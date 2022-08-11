import { gql } from "apollo-server";

const typeDefs = gql`
  type Mutation {
    deletePost(id: Int!): Boolean!
  }
`;

export const mutations = typeDefs;
