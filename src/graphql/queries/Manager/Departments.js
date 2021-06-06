import { gql } from "@apollo/client";

const GET_DEPARTMENTS = gql`
  query {
    depts {
      id
      school
      faculty
      name
      description
    }
  }
`;

export { GET_DEPARTMENTS };
