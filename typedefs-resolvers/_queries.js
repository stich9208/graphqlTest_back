import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    post(id: Int!): Post
    users: [User!]!
  }
`;

export const queries = typeDefs;
