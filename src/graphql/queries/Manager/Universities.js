import { gql } from "@apollo/client";

const GET_UNIVERSITIES = gql`
  query {
    schools {
      id
      name
      description
      location
    }
  }
`;

export { GET_UNIVERSITIES };
