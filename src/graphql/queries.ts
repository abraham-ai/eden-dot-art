import { gql } from '@apollo/client'

export const GET_CREATIONS = gql`
  query CreationsForHome($offset: Int!, $limit: Int!) {
    creationsForHome(offset: $offset, limit: $limit) {
      id
      text_input
      sha
      date
      source {
        id
        address
        handle
        type
      }
      statistics {
        burned_by_me
        burns
        praised_by_me
        praises
      }
      status
      status_code
      intermediate_sha
    }
  }
`

// https://graphql.prd.aws.abraham.fun/
