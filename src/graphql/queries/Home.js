import { gql } from '@apollo/client';

const GETSINGLESTATE = gql`
  query GetState($state: String!) {
    get_single_state(state: $state) {
      _id
      billing_type
      no_of_approved_customers
      no_of_approved_agents
      no_of_declined_customers
      no_of_declined_agents
      revenue
      percentage_increase
      no_of_complaints
      all_customer_numbers
      no_of_approved_customers
      all_customers
      all_customers_percent_inc
      active_customers
      active_customers_percent_inc
      more_request_are_from{
        local_govt
        percentage
      }
      most_popular_complaint_type{
       complaint_type
        percentage
      }
      complaints
      complaints_percentage_increase
      complaints_quarter_stats{
        local_govt
        no_of_complaints
        percentage
      }
      users_local_govt_no{
        local_govt
        no_of_users
      }
      last_six_customers{
        month
        no_of_customer
      }
    }
  }
`;

const GETSTATEREVENUE = gql`
  query($state: String!){
    get_state_revenue(state: $state)
  }
`

export { GETSINGLESTATE, GETSTATEREVENUE };