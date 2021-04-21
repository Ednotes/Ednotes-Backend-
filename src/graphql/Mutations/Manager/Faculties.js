import { gql } from "@apollo/client";

const ADD_FACULTY = gql`
  mutation AddTodo($inputValue: facultyInput) {
    createSchool(input: $inputValue) {
      id
      school
      name
      description
    }
  }
`;

export { ADD_FACULTY };
