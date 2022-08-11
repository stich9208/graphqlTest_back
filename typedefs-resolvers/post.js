import { gql } from "apollo-server";

import postData from "../_POST.json" assert { type: "json" };
import userData from "../_USER.json" assert { type: "json" };
const POST_LIST = postData.data;
const USER_LIST = userData.data;

const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    userId: Int!
    author: User!
  }
`;

const resolvers = {
  Post: {
    author({ userId }) {
      return USER_LIST.find((user) => user.id === userId);
    },
  },
  Query: {
    posts() {
      return POST_LIST;
    },
    post(root, { id }) {
      return POST_LIST.find((p) => p.id === id);
    },
  },
  Mutation: {
    deletePost(root, { id }) {
      try {
        const deleteElem = POST_LIST.find((post) => post.id === id);
        const deleteElemIndex = POST_LIST.indexOf(deleteElem);
        POST_LIST.splice(deleteElemIndex, 1);
        return true;
      } catch (err) {
        if (err) return false;
      }
    },
  },
};

export const Post = {
  typeDefs,
  resolvers,
};
