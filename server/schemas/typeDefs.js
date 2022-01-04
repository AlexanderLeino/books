const { gql } = require('apollo-server')

const typeDefs = gql`


type Book {
    bookid: String!
    authors: [String!]
    description: String!
    title: String!
    image: String!
    link: String!
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
    
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me(_id: ID!): User
}

input BookInput {
    authors: [String!]
    description: String!
    title: String!
    bookid: String!
    image: String!
    link: String!
}

type Mutation {
    login(email: String!, password: String! ): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(_id: ID!, book: BookInput!): User
    removeBook(_id: ID!, bookId: String!): User
}
`

module.exports = typeDefs