import { gql } from '@apollo/client';

const GET_TOPICS = gql`
  query ($id: ID!) {
    get_course_topics(courseId: $id) {
      edges {
        _id
        name
        description
      }
    }
  }
`;

export { GET_TOPICS };
