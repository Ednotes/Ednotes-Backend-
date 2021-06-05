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

const GET_UNIVERSITY = gql`
  query ($id: ID!) {
    school(id: $id) {
      id
      name
      description
      location
    }
  }
`;

export { GET_UNIVERSITIES, GET_UNIVERSITY };
