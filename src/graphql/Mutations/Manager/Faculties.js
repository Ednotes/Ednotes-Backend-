import { gql } from "@apollo/client";

const ADD_FACULTY = gql`
  mutation AddTodo($inputValue: facultyInput) {
    createFaculty(input: $inputValue) {
      school
      name
      description
    }
  }
`;

export { ADD_FACULTY };
