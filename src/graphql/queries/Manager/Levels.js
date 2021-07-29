import { gql } from '@apollo/client';

const GET_LEVELS = gql`
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
      departments {
        _id
        name
        description
        faculty {
          _id
        }
      }
      levels {
        _id
        name
        faculty {
          name
        }
        dept {
          name
        }
        students
      }
    }
  }
`;

export { GET_LEVELS };
