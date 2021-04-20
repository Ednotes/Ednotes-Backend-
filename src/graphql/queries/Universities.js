
import { gql } from '@apollo/client';

const GETAGENTS = gql`
  query GetAgents($state: String!, $limit: Int) {
    view_state_agents(state: $state, limit: $limit) {
      edges{
        _id
        agent_id
        full_name
        email
        id_number
        form_of_id
        phone_number
        address
        state
        local_govt
        is_approved
        has_been_declined
        is_active
        no_of_registered_customers
      }
    }
  }
`;

const GETAGENTSBYLOCATION = gql`
  query GetAgentsByLocation($state: String!, $local_govt: String!, $limit: Int) {
    view_state_agents_by_location(state: $state, local_govt: $local_govt,  limit: $limit) {
      edges{
        _id
        full_name
        email
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        is_active
        no_of_registered_customers
      }
    }
  }
`;

const GETAGENTSBYCATEGORY = gql`
  query GetAgentsByCategory($state: String!, $category: String!, $limit: Int) {
    view_state_agents_by_category(state: $state, category: $category,  limit: $limit) {
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
        is_active
        no_of_registered_customers
      }
    }
  }
`;

const FINDAGENTS = gql`
  query FINDAGENTS($name: String!) {
    find_agents(name: $name) {
        _id
        full_name
        email
        phone_number
        has_been_declined
        address
        state
        local_govt
        is_approved
        is_active
        no_of_registered_customers
    }
  }
`;

export {
  GETAGENTS,
  GETAGENTSBYCATEGORY,
  GETAGENTSBYLOCATION,
  FINDAGENTS
};