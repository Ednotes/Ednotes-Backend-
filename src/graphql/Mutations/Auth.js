import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation($input: loginInput) {
    login(input: $input) {
      token
    }
  }
`;

export { LOGIN };
