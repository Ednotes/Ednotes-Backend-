import { gql } from '@apollo/client';

const APPROVECUSTOMER = gql`
  mutation(
    $customerId: ID!
  ) {
    verify_customer(
      customerId: $customerId
    ) {
      message
      value
    }
  }
`;

const DECLINECUSTOMER = gql`
  mutation(
    $customerId: ID!
  ) {
    decline_customer(
      customerId: $customerId
    ) {
      message
      value
    }
  }
`;

const ADDCUSTOMER = gql`
  mutation(
    $full_name: String!
    $email: String!
    $phone_number: String!
    $local_govt: String!
    $category: String!
    $address: String!
    $state: String!
     $is_existing: Boolean!
    $state_issued_id: String
  ) {
    admin_create_customer(
      full_name: $full_name
      email: $email
      phone_number: $phone_number
      local_govt: $local_govt
      category: $category
      address: $address
      state: $state
      is_existing: $is_existing
      state_issued_id: $state_issued_id
    ) {
      message
      value
    }
  }
`;


const CREATEBILLING = gql`
  mutation(
    $title: String!
      $description: String!
    $amount: Int!
    $customerId: ID!
  ) {
    custom_customer_billing(
      title: $title
      amount: $amount
      description: $description
      customerId: $customerId
    ) {
      message
      value
    }
  }
`;


export { APPROVECUSTOMER, ADDCUSTOMER, DECLINECUSTOMER, CREATEBILLING }


