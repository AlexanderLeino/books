import { gql } from '@apollo/client'

export const GET_ME = gql`
    query Getme ($_id: ID!){
        me(_id: $_id){
            username
            savedBooks {
                title
                description
                image
                authors
            }
        }
    }
`