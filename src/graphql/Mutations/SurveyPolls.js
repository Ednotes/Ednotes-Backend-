import { gql } from '@apollo/client';

const CREATEPOLL = gql`
  mutation(
    $poll_target: String!
    $poll_options: [String!]!
    $poll_title: String!
  ) {
    create_poll(
      poll_target: $poll_target
      poll_options: $poll_options
      poll_title: $poll_title
    ) {
      message
      value
    }
  }
`;

const CLOSEPOLL = gql`
  mutation(
    $pollId: ID!
  ) {
    close_poll(
      pollId: $pollId
    ) {
      message
      value
    }
  }
`;

const REOPENPOLL = gql`
  mutation(
    $pollId: ID!
  ) {
    reopen_poll(
      pollId: $pollId
    ) {
      message
      value
    }
  }
`;


export { CREATEPOLL, CLOSEPOLL, REOPENPOLL }