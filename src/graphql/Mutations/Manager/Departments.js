import { gql } from "@apollo/client";

const ADD_DEPARTMENT = gql`
	mutation AddTodo($inputValue: deptInput) {
		createDept(input: $inputValue) {
			_id
			name
			description
			pay_per_semester
		}
	}
`;

export { ADD_DEPARTMENT };
