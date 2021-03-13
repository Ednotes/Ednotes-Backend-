import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation($input: loginInput) {
    login(input: $input) {
      token
    }
  }
`;

const CHANGEPASSWORD = gql`
  mutation(
    $old_password: String!
    $new_password: String!
    $confirm_password: String!
  ) {
    change_state_admin_password(
      old_password: $old_password
      new_password: $new_password
      confirm_password: $confirm_password
    ) {
      message
      value
    }
  }
`;

export { LOGIN, CHANGEPASSWORD };
