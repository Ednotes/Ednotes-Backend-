import { gql } from '@apollo/client';

const ADD_LEVEL = gql`
  mutation AddLevel($inputValue: levelInput) {
    createLevel(input: $inputValue) {
      _id
      name
    }
  }
`;

export { ADD_LEVEL };
