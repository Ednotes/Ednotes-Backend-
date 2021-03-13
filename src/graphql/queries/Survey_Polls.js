import { gql } from '@apollo/client';

const GETPOLLS = gql`
  query getState($state: String!) {
    view_state_poll(state: $state){
      edges{
        _id
        poll_title
        no_of_responses
        poll_status
        poll_target
        createdAt
        poll_options
        responses{
          _id
          poll_option
          no_of_votes
          percentage
        }
      }
    }
  }
`;

const GETPOLLMETRICS = gql`
  query getMetrics($pollId: ID!) {
    calc_poll_percent(pollId: $pollId){
      _id
      poll_title
      no_of_responses
      poll_target
      poll_status
      responses{
        _id
        poll_option
        no_of_votes
        percentage
      }
    }
  }
`;

export { GETPOLLS, GETPOLLMETRICS };