import { ApolloServer, gql } from 'apollo-server';

let typeDefs = gql`
  type Book {
    title: String,
    author: String
  }
  type Query {
    books: [Book]
  }
`;

let resolvers = {
  Query: {
    books: () => books
  }
}

let server = new ApolloServer({typeDefs, resolvers});
server.listen(8080);

let books = [
  {
    title: '7 Habits of Highly Effective People',
    author: 'Stephen Covey'
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  }
];