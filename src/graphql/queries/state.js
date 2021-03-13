import { gql } from '@apollo/client';

const GETSTATECATEGORIES = gql`
  query getState($state: String!) {
    get_single_state(state: $state){
      _id
      customer_category{
        _id
        category_name
      }
    }
  }
`;

export { GETSTATECATEGORIES };