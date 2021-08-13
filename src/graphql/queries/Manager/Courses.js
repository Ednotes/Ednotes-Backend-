import { gql } from '@apollo/client';

const GET_SCHOOL = gql`
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
          _id
          name
        }
        dept {
          _id
          name
        }
        students
      }
    }
  }
`;

const GET_COURSES = gql`
  query {
    get_all_courses {
      edges {
        _id
        name
        description
        semester
        school {
          _id
          name
        }
      }
    }
  }
`;

export { GET_COURSES, GET_SCHOOL };
