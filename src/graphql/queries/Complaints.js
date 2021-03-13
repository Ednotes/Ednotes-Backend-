
import { gql } from '@apollo/client';

const GETCOMPLAINTS = gql`
  query GetComplaints($limit: Int, $state: String!) {
    get_state_complains(limit: $limit, state: $state) {
      edges{
        _id
        complaint_type
        complaint_description
        complaint_status
        is_archived
        createdAt
        images
        customer_complainer{
            _id
            avatar
            full_name
          }
          agent_complainer{
            _id
            avatar
            full_name
          }
        thread_replies{
          _id
          message
          agent_complainer{
            _id
            avatar
            full_name
          }
          customer_complainer{
            _id
            avatar
            full_name
          }
            state_admin{
            _id
        
            full_name
          }
          createdAt
        }
      }
    }
  }
`;


const GETSINGLECOMPLAINT = gql`
  query GetSingleComplaints($complaintId: ID!) {
    get_single_complain(complaintId: $complaintId,) {
         _id
        complaint_type
        complaint_description
        complaint_status
        is_archived
        createdAt
        images
        customer_complainer{
            _id
            avatar
            full_name
          }
          agent_complainer{
            _id
            avatar
            full_name
          }
        thread_replies{
          _id
          message
          agent_complainer{
            _id
            full_name
          }
          customer_complainer{
            _id
            full_name
          }
            state_admin{
            _id
            full_name
            role
          }
          createdAt
        }
      
    }
  }
`;

export {
  GETCOMPLAINTS,
  GETSINGLECOMPLAINT
};
