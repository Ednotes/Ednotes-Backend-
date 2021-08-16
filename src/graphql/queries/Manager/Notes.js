import { gql } from '@apollo/client';

const GET_NOTES = gql`
  query ($id: ID!) {
    get_topic_notes(topicId: $id) {
      edges {
        _id
        name
        text
        noteAttachments {
          _id
          url
          file_name
          date_uploaded
        }
      }
    }
  }
`;

export { GET_NOTES };
