import { gql } from '@apollo/client';

const GETPOSTS = gql`
  query GetPosts($state: String!, $limit: Int) {
    get_state_posts(state: $state, limit: $limit) {
      edges{
        _id
       title
       content
       slug
       state
       image
       no_of_comments
         creator{
         full_name
       }
      }
    }
  }
`;

const GETCOMMENTS = gql`
  query GetPosts($postId: ID!) {
    fetch_comments(postId: $postId) {
      edges{
        _id
  message
  createdAt
  agent{
    _id
    full_name
  }
  customer{
    _id
    full_name
  }
  state_admin{
    _id
    full_name
  }
  super_admin{
    _id
    full_name
  }
      }
    }
  }
`;
export { GETPOSTS, GETCOMMENTS };


// comments{
//   _id
//   message
//   createdAt
// }
// createdAt
// creator{
//   full_name
// }