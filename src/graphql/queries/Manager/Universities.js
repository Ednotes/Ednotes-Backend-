import { gql } from '@apollo/client';

const GET_UNIVERSITIES = gql`
  query {
    schools {
      _id
      name
      description
      location
    }
  }
`;

const GET_UNIVERSITY = gql`
  query ($id: ID!) {
    school(id: $id) {
      _id
      name
      description
      location
    }
  }
`;

export { GET_UNIVERSITIES, GET_UNIVERSITY };
