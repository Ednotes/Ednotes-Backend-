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

export { GET_FACULTIES };
