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

const GET_USERS = gql`
  query {
    users {
      _id
      firstName
      lastName
      username
      email
      userType
      isVerified
    }
  }
`;

export { GET_USER, GET_USERS };
