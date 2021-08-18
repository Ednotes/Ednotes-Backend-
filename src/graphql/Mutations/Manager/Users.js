import { gql } from '@apollo/client';

const CREATE_SUPER_ADMIN = gql`
  mutation AddTodo($inputValue: signupInput!) {
    createSuperAdmin(input: $inputValue) {
      message
      value
      user {
        firstName
        lastName
        username
        email
        userType
      }
    }
  }
`;

export { CREATE_SUPER_ADMIN };

const CREATE_ADMIN = gql`
  mutation AddTodo($inputValue: signupInput!) {
    createAdmin(input: $inputValue) {
      message
      value
      user {
        firstName
        lastName
        username
        email
        userType
      }
    }
  }
`;

export { CREATE_ADMIN };
