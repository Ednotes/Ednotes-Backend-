
import { gql } from '@apollo/client';

const GETCUSTOMERS = gql`
  query GetCustomers($state: String!, $limit: Int) {
    view_state_customers(state: $state, limit: $limit) {
      edges{
        _id
        full_name
        email
        category
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        type_of_user
        amount_due
        billing_due_in
        avatar
        customer_id
             custom_billing{
          _id
          billing_title
          billing_amount
          has_paid
          billed_by{
            full_name
          }
          description
        }
      }
    }
  }
`;

const GETCUSTOMERHISTORY = gql`
  query GetCustomers($customerId: ID!, $limit: Int) {
   customer_payment_history(customerId: $customerId, limit: $limit) {
      edges{
        _id
        reference
        amount_paid
        transaction_date
        currency
        processed_by_customer
        processed_by_agent
        agent_processed{
          full_name
          agent_id
        }
        customer{
          address
          customer_id
          full_name
        }
        createdAt
      }
    }
  }
`;

const GETCUSTOMERSBYLOCATION = gql`
  query GetCustomersByLocation($state: String!, $local_govt: String!, $limit: Int) {
    view_state_customers_by_location(state: $state, local_govt: $local_govt,  limit: $limit) {
      edges{
          _id
        full_name
        email
        category
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        type_of_user
        amount_due
        billing_due_in
        avatar
        customer_id
             custom_billing{
          _id
          billing_title
          billing_amount
          has_paid
          billed_by{
            full_name
          }
          description
        }
      }
    }
  }
`;

const GETCUSTOMERSBYCATEGORY = gql`
  query GetCustomersByCategory($state: String!, $category: String!, $limit: Int) {
    view_state_customers_by_category(state: $state, category: $category,  limit: $limit) {
      edges{
          _id
        full_name
        email
        category
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        type_of_user
        amount_due
        billing_due_in
        avatar
        customer_id
             custom_billing{
          _id
          billing_title
          billing_amount
          has_paid
          billed_by{
            full_name
          }
          description
        }
      }
    }
  }
`;

const FINDCUSTOMERS = gql`
  query FINDCUSTOMERS($name: String!) {
    find_customers(name: $name) {
          _id
        full_name
        email
        category
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        type_of_user
        amount_due
        billing_due_in
        avatar
        customer_id
             custom_billing{
          _id
          billing_title
          billing_amount
          has_paid
          billed_by{
            full_name
          }
          description
        }
    }
  }
`;

export {
  GETCUSTOMERS,
  GETCUSTOMERSBYLOCATION,
  GETCUSTOMERSBYCATEGORY,
  FINDCUSTOMERS,
  GETCUSTOMERHISTORY
};
