import { gql } from '@apollo/client';

const ADD_TOPIC = gql`
  mutation addTopic($course: ID!, $name: String!, $description: String!) {
    createTopic(course: $course, name: $name, description: $description) {
      message
      value
    }
  }
`;

const EDIT_TOPIC = gql`
  mutation editTopic($topicId: ID!, $name: String!, $description: String!) {
    editTopic(topicId: $topicId, name: $name, description: $description) {
      message
      value
    }
  }
`;

const DELETE_TOPIC = gql`
  mutation deleteTopic($topicId: ID!) {
    deleteTopic(topicId: $topicId) {
      message
      value
    }
  }
`;

export { ADD_TOPIC, EDIT_TOPIC, DELETE_TOPIC };
