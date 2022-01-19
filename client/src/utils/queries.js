import { gql } from '@apollo/client'

export const GET_ME = gql`
    query GetMe($_id: ID!) {
        me(_id: $_id) {
            username
            savedBooks {
                title
                description
                image
                bookId
                authors
            }
        }
    }
`