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
      faculties {
        _id
        name
        description
      }
      departments {
        _id
        name
        description
      }
    }
  }
`;

export { GET_UNIVERSITIES, GET_UNIVERSITY };
