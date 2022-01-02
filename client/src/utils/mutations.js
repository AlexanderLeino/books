import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            email
            password
        }
    }
`

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            username
            email
            password
        }
    }
   

`

export const SAVE_BOOK = gql`
    SaveBook($_id: ID!, $book: BookInput!){
        saveBook(_id: $_id, book: $book) {
            username
                savedBooks {
                    bookid
                    title
                    authors
                }
        }
    }
`

export const REMOVE_BOOK = gql`
    RemoveBook($_id: ID!, $bookId: String!){
        removeBook(_id: $_id, bookId: $bookId){
            savedBooks {
                bookid
                title
                authors
            }
        }
    }
`