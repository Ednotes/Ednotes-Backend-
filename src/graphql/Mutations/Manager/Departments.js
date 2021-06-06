import { gql } from "@apollo/client";

const ADD_DEPARTMENT = gql`
  mutation AddTodo($inputValue: schoolInput) {
    createSchool(input: $inputValue) {
      school
      name
      faculty
      description
    }
  }
`;

export { ADD_DEPARTMENT };
