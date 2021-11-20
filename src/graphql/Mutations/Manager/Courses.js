import { gql } from "@apollo/client";

const ADD_COURSE = gql`
	mutation AddCourse(
		$name: String!
		$description: String!
		$semester: Int!
		$school: ID!
		$faculty: ID!
		$dept: ID!
		$level: ID!
	) {
		createCourse(
			name: $name
			description: $description
			school: $school
			faculty: $faculty
			dept: $dept
			level: $level
			semester: $semester
		) {
			message
			value
			data {
				_id
			}
		}
	}
`;

// eslint-disable-next-line
const EDIT_COURSE = gql`
	mutation updateCourse(
		$courseId: ID!
		$name: String
		$description: String
		$semester: String
	) {
		editCourse(
			courseId: $courseId
			name: $name
			description: $description
			semester: $semester
		) {
			message
			value
		}
	}
`;

const DELETE_COURSE = gql`
	mutation deleteCourse($courseId: ID!) {
		deleteCourse(courseId: $courseId) {
			message
			value
		}
	}
`;

export { ADD_COURSE, DELETE_COURSE, EDIT_COURSE };
