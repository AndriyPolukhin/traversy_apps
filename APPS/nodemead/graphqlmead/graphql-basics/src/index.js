import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

// Demo user data
const users = [
  {
    id: '1',
    name: 'Andriy',
    email: 'andriy@gmail.com',
    age: 33
  },
  {
    id: '2',
    name: 'Anastasia',
    email: 'astena@gmail.com',
    age: 29
  },
  {
    id: '3',
    name: 'Alexandra',
    email: 'alex@gmail.com',
    age: 28
  }
];

const posts = [
  {
    id: '10',
    title: 'Standup-post',
    body: 'It was a stand-up',
    published: true,
    author: '1'
  },
  {
    id: '21',
    title: 'Post the conversation',
    body: 'lorem tuguo oasdfa dentisium',
    published: true,
    author: '2'
  },
  {
    id: '3',
    title: 'Get to it',
    body: 'Meeting',
    published: false,
    author: '1'
  }
];

const comments = [
  {
    id: '123',
    text: 'That was a good one',
    author: '1',
    post: '10'
  },
  {
    id: '321',
    text: 'One more good one',
    author: '1',
    post: '3'
  },
  {
    id: '564',
    text: "Howdy y'all",
    author: '2',
    post: '10'
  },
  {
    id: '574',
    text: 'Your point?',
    author: '2',
    post: '21'
  }
];

// Type definitions (schema)
const typeDefs = `
   type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      comments: [Comment!]!
      me: User!
      post: Post!
   }

   type Mutation {
     createUser(data: CreateUserInput!): User!
     createPost(data: CreatePostInput!): Post!
     createComment(data: CreateCommentInput!): Comment!
   }

   input CreateUserInput {
     name: String!
     email: String!
     age: Int
   }

   input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
   }

   input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
   }

   type User {
     id: ID!
     name: String!
     email: String!
     age: Int
     posts: [Post!]!
     comments: [Comment!]!
   }

   type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
     author: User!
     comments: [Comment!]!
   }

   type Comment {
     id: ID!
     text: String!
     author: User!
     post: Post!
   }
`;
// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter(post => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments;
      }
      return comments.filter(comment => {
        return args.query === comment.author;
      });
    },
    me() {
      return {
        id: '123',
        name: 'Andriy',
        email: 'andriy@gmail.com',
        age: 33
      };
    },
    post() {
      return {
        id: '321',
        title: 'The War of Art',
        body: 'This is a book about creativity',
        published: true
      };
    }
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some(user => user.email === args.data.email);
      if (emailTaken) {
        throw new Error('Email taken.');
      }

      const user = {
        id: uuidv4(),
        ...args.data
      };

      users.push(user);

      return user;
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some(user => user.id === args.data.author);
      if (!userExists) {
        throw new Error('User not found.');
      }
      const post = {
        id: uuidv4(),
        ...args.data
      };

      posts.push(post);

      return post;
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some(user => user.id === args.data.author);
      const postExists = posts.some(
        post => post.id === args.data.post && post.published
      );

      if (!userExists || !postExists) {
        throw new Error('Unable to find user and post.');
      }

      const comment = {
        id: uuidv4(),
        ...args.data
      };

      comments.push(comment);

      return comment;
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => {
        return comment.post === parent.id;
      });
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter(post => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => {
        return comment.author === parent.id;
      });
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find(post => {
        return post.id === parent.post;
      });
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
