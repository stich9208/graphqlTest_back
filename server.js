import { ApolloServer, gql } from "apollo-server";

import { queries } from "./typedefs-resolvers/_queries.js";
import { mutations } from "./typedefs-resolvers/_mutations.js";
import { User } from "./typedefs-resolvers/user.js";
import { Post } from "./typedefs-resolvers/post.js";

// const typeDefs = gql`
//   """
//   Address객체의 위치를 나타내는 객체
//   """
//   type Geo {
//     lat: String!
//     lng: String!
//   }
//   """
//   User타입의 주소정보를 담고 있는 객체
//   """
//   type Address {
//     street: String!
//     suite: String!
//     city: String!
//     zipcode: String!
//     geo: Geo!
//   }
//   """
//   User타입의 회사정보를 담고 있는 객체
//   """
//   type Company {
//     name: String!
//     catchPhrase: String!
//     bs: String!
//   }
//   """
//   사용자에 대한 정보를 담고 있는 객체
//   """
//   type User {
//     id: Int!
//     name: String!
//     username: String!
//     email: String!
//     phone: String!
//     website: String!
//     address: Address!
//     company: Company!
//   }
//   type Post {
//     id: Int!
//     title: String!
//     body: String!
//     userId: Int!
//     author: User!
//   }
//   type Query {
//     """
//     모든 post의 리스트를 반환하는 쿼리
//     """
//     posts: [Post!]!
//     """
//     단일 post를 반환하는 쿼리
//     """
//     post(id: Int!): Post
//     """
//     모든 사용자를 반환하는 쿼리
//     """
//     users: [User!]!
//   }
//   type Mutation {
//     """
//     선택한 post를 삭제하는 뮤테이션
//     """
//     deletePost(id: Int!): Boolean!
//   }
// `;

// const resolvers = {
//   Post: {
//     author({ userId }) {
//       return USER_LIST.find((user) => user.id === userId);
//     },
//   },
//   Query: {
//     posts() {
//       return POST_LIST;
//     },
//     users() {
//       return USER_LIST;
//     },
//     post(root, { id }) {
//       console.log(id);
//       return POST_LIST.find((p) => p.id === id);
//     },
//   },
//   Mutation: {
//     deletePost(root, { id }) {
//       try {
//         const deleteElem = POST_LIST.find((post) => post.id === id);
//         const deleteElemIndex = POST_LIST.indexOf(deleteElem);
//         POST_LIST.splice(deleteElemIndex, 1);
//         return true;
//       } catch (err) {
//         if (err) return false;
//       }
//     },
//   },
// };

const typeDefs = [queries, mutations, User.typeDefs, Post.typeDefs];
const resolvers = [User.resolvers, Post.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("Running!", url);
});
