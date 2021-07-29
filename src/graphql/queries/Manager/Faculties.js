import { gql } from '@apollo/client';

const GET_FACULTY = gql`
  query ($id: ID!) {
    faculty(id: $id) {
      _id
      school {
        name
        description
      }
      name
      description
    }
  }
`;

const GET_FACULTIES = gql`
  query ($id: ID!) {
    school(id: $id) {
      _id
      name
      description
      faculties {
        _id
        name
        description
      }
    }
  }
`;
export { GET_FACULTIES, GET_FACULTY };
