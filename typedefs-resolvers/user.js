import { gql } from "apollo-server";

import userData from "../_USER.json" assert { type: "json" };
const USER_LIST = userData.data;

const typeDefs = gql`
  type Geo {
    lat: String!
    lng: String!
  }
  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
    address: Address!
    company: Company!
  }
`;

const resolvers = {
  Query: {
    users() {
      return USER_LIST;
    },
  },
};
console.log(gql);

export const User = {
  typeDefs,
  resolvers,
};
