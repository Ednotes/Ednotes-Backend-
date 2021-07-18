import { gql } from '@apollo/client';

const GET_USER = gql`
  query {
    user {
      _id
      firstName
      lastName
      username
    }
  }
`;

export { GET_USER };
