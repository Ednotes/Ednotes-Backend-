import { gql } from '@apollo/client';

const APPROVEAGENT = gql`
  mutation(
    $agentId: ID!
  ) {
    verify_agent(
      agentId: $agentId
    ) {
      message
      value
    }
  }
`;

const DECLINEAGENT = gql`
  mutation(
    $agentId: ID!
  ) {
    decline_agent(
      agentId: $agentId
    ) {
      message
      value
    }
  }
`;

const REACTIVATEAGENT = gql`
  mutation(
    $agentId: ID!
  ) {
    reactivate_agent(
      agentId: $agentId
    ) {
      message
      value
    }
  }
`;

const DEACTIVATEAGENT = gql`
  mutation(
    $agentId: ID!
  ) {
    deactivate_agent(
      agentId: $agentId
    ) {
      message
      value
    }
  }
`;

const ADDUNIVERSITY = gql`
  mutation(
    $full_name: String!
    $email: String!
    $phone_number: String!
    $local_govt: String!
    $address: String!
    $state: String!
  ) {
    admin_create_university(
      full_name: $full_name
      email: $email
      phone_number: $phone_number
      local_govt: $local_govt
      address: $address
      state: $state
    ) {
      message
      value
    }
  }
`;


export { APPROVEAGENT, ADDUNIVERSITY, DECLINEAGENT, REACTIVATEAGENT, DEACTIVATEAGENT }


