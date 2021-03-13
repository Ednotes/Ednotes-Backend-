import { gql } from '@apollo/client';

const POSTCOMMENT = gql`
  mutation(
    $postId: ID!
    $message: String!
  ) {
    post_comment(
      postId: $postId
      message: $message
    )
  }
`;


export { POSTCOMMENT };


