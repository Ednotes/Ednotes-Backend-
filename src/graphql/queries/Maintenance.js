import { gql } from '@apollo/client';

const GETEVENTS = gql`
  query getEvents($state: String!) {
    get_state_maintenance(state: $state){
     edges{
       _id
       name
       start_date
       end_date
       local_govts
       createdAt
       description
     }
    }
  }
`;

export { GETEVENTS };