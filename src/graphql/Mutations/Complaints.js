import { gql } from '@apollo/client';

const COMMENT = gql`
  mutation(
    $message: String!, 
    $complaintId: ID!
  ) {
    comment_on_complain(
      complaintId: $complaintId
      message: $message
    ) {
      message
      value
    }
  }
`;

const CLOSECOMPLAINT = gql`
  mutation(
    $complaintId: ID!
  ) {
    close_complaint(
      complaintId: $complaintId
    ) {
      message
      value
    }
  }
`;


const REOPENCOMPLAINT = gql`
  mutation(
    $complaintId: ID!
  ) {
    reopen_complaint(
      complaintId: $complaintId
    ) {
      message
      value
    }
  }
`;


export { COMMENT, CLOSECOMPLAINT, REOPENCOMPLAINT }


