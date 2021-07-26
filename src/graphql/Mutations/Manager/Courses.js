import { gql } from '@apollo/client';

const ADD_COURSE = gql`
  mutation AddLevel(
    $name: String
    $description: String
    $semester: String
    $school: ID
    $faculty: ID
    $dept: ID
    $level: ID
  ) {
    createCourse(
      name: $name
      description: $description
      school: $school
      faculty: $faculty
      dept: $dept
      level: $level
      semester: $semester
    ) {
      message
      value
    }
  }
`;

export { ADD_COURSE };
