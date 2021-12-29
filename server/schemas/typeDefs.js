const { gql } = require('apollo-server')

const typeDefs = gql`


type Book {
    bookid: String!
    authors: [String!]
    description: String!
    title: String!
    image: String!
    link: String!
    title: String!
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

type BookInput

type Mutation {

}

`

module.exports = typeDefs