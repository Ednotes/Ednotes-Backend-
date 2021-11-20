import { gql } from "@apollo/client";

const GET_DEPARTMENTS = gql`
	query($id: ID!) {
		school(id: $id) {
			_id
			name
			description
			faculties {
				_id
				name
				description
			}
			departments {
				_id
				name
				description
				pay_per_semester
				faculty {
					name
					description
				}
			}
		}
	}
`;

export { GET_DEPARTMENTS };
