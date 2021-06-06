import { gql } from "@apollo/client";

const ADD_DEPARTMENT = gql`
  mutation AddTodo($inputValue: deptInput) {
    createDept(input: $inputValue) {
      id
      school
      name
      faculty
      description
    }
  }
`;

export { ADD_DEPARTMENT };
