import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation ($input: loginInput!) {
    login(input: $input) {
      message
      value
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export { LOGIN };
