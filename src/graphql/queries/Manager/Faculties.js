import { gql } from '@apollo/client';

const GET_FACULTIES = gql`
  query {
    faculties {
      _id
      school
      name
      description
    }
  }
`;

const GET_FACULTY = gql`
  query ($id: ID!) {
    faculty(id: $id) {
      _id
      school
      name
      description
    }
  }
`;

export { GET_FACULTIES, GET_FACULTY };
