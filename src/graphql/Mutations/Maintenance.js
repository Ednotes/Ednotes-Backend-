import { gql } from '@apollo/client';

const CREATEEVENT = gql`
  mutation(
    $name: String!, 
    $description: String,
    $local_govts: [String!], 
    $start_date: DateTime!,
    $end_date: DateTime!,
    $all_local_govts: Boolean!
  ) {
    create_maintenance(
      name: $name
      description: $description
      local_govts: $local_govts
      start_date: $start_date
      end_date: $end_date
      all_local_govts: $all_local_govts
    ) {
      message
      value
    }
  }
`;



export { CREATEEVENT }


