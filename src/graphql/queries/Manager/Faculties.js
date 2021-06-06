import { gql } from "@apollo/client";

const GET_FACULTIES = gql`
  query {
    faculties {
      id
      school
      name
      description
    }
  }
`;

const GET_FACULTY = gql`
  query ($id: ID!) {
    faculty(id: $id) {
      id
      school
      name
      description
    }
  }
`;

export { GET_FACULTIES, GET_FACULTY };
