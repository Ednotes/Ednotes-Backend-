import { gql } from '@apollo/client';

const ADD_UNIVERSITY = gql`
  mutation AddTodo($inputValue: schoolInput) {
    createSchool(input: $inputValue) {
      _id
      name
      description
      location
    }
  }
`;

export { ADD_UNIVERSITY };
