import { gql } from "@apollo/client";

const ADD_UNIVERSITY = gql`
  mutation AddTodo($inputValue: schoolInput) {
    createSchool(input: $inputValue) {
      id
      name
      description
      location
    }
  }
`;

export { ADD_UNIVERSITY };
